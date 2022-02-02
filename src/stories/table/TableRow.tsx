import { CardRole, Column, Data, TableRowProps } from "./_types";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import styled from "styled-components";
import { ReactElement, useState, isValidElement } from "react";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";

interface ElementProps {
  readonly role?: CardRole | "more" | "toggle-more";
  readonly isCompact?: boolean;
}

const iconSize = 24;

interface CellProps {
  data?: Data;
  col: Column;
}
const Cell = ({ data, col }: CellProps) => {
  const content =
    typeof data === "object" && "content" in data ? data.content : data;
  return (
    <div
      style={{ maxWidth: col.maxWidth || "auto" }}
      title={
        typeof data === "object" && "title" in data
          ? data.title
          : data?.toString()
      }
    >
      {col.hideIndex ? (
        <span>{content}</span>
      ) : (
        <>
          <span className="data-index">{col.dataIndex}</span>:{" "}
          <strong>{content}</strong>
        </>
      )}
    </div>
  );
};

const Element = styled.div<ElementProps>`
  grid-area: ${(p) => p.role};
  ${(p) =>
    p.role === "title"
      ? `font-weight: ${p.theme.typography.fontWeight.medium};`
      : ""}
  ${(p) => (p.role === "overline" ? `color: ${p.theme.variants.primary};` : "")}
  &.more-info {
    ${(p) =>
      p.isCompact
        ? `max-height: 0;
         overflow: hidden;`
        : `max-height: max-content;
         padding-top: ${p.theme.grid.sizes[2]};
         padding-bottom: ${p.theme.grid.sizes[2]};
         padding-right: ${p.theme.grid.sizes[2]};`}
  } ;
`;

export const TableRow = ({
  columns,
  dataRow,
  isExpandable,
  className,
}: TableRowProps) => {
  useWindowSize();

  const BasicRow = () => (
    <>
      {columns.map((col) => (
        <div
          className={`${className} tbody cell`}
          key={`${dataRow.key}-${col.key}`}
        >
          <Cell data={dataRow[col.dataIndex]} col={col} />
        </div>
      ))}
    </>
  );

  const CardStyle = styled.div`
    display: grid;
    grid-column-gap: ${(p) => p.theme.grid.sizes[2]};
    grid-template-areas:
      "overline overline"
      "title cta"
      "more more";
    border-bottom: 1px solid ${(p) => p.theme.colors.gray300};
    &.expandable {
      grid-template-areas:
        "toggle-more overline overline"
        "toggle-more title cta"
        "more more more";
      .more-info {
        padding-left: calc(${(p) => p.theme.grid.sizes[3]} * 3);
        background-color: ${(p) => p.theme.colors.gray100};
      }
    }
    .data-index {
      text-transform: capitalize;
    }
  `;

  const TableCard = () => {
    const [isCompact, setIsCompact] = useState(isExpandable);
    const toggleCompact = () => {
      setIsCompact(!isCompact);
    };
    const ExpandButton = () => (
      <Element role="toggle-more" onClick={toggleCompact}>
        {isCompact ? (
          <ChevronDown size={iconSize} />
        ) : (
          <ChevronUp size={iconSize} />
        )}
      </Element>
    );
    let cardClasses = "aq-mb-3 aq-pb-3";
    if (isExpandable) cardClasses += " expandable";
    return (
      <CardStyle className={cardClasses}>
        {isExpandable && <ExpandButton />}
        {columns.map(
          (col) =>
            col.role && (
              <Element
                key={`${dataRow.key}-${col.key}`}
                role={col.role}
                onClick={() => {
                  if (col.role !== "cta" && isExpandable) toggleCompact();
                }}
              >
                <Cell data={dataRow[col.dataIndex]} col={col} />
              </Element>
            )
        )}
        <Element role="more" className="more-info" isCompact={isCompact}>
          {columns.map(
            (col) =>
              !col.role && (
                <div
                  key={`${dataRow.key}-${col.key}`}
                  style={{ gridArea: col.role }}
                >
                  <Cell data={dataRow[col.dataIndex]} col={col} />
                </div>
              )
          )}
        </Element>
      </CardStyle>
    );
  };

  return window.matchMedia("only screen and (min-width: 768px)").matches ? (
    <BasicRow />
  ) : (
    <TableCard />
  );
};
