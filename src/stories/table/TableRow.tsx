import { CardRole, Column, Data, TableRowProps } from "./_types";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import styled from "styled-components";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";
import { aqBootstrapTheme } from "../theme/defaultTheme";

interface ElementProps {
  readonly role?: CardRole | "more" | "toggle-more";
  readonly isCompact?: boolean;
  readonly isExpandable?: boolean;
}

const iconSize = 24;

interface CellProps {
  data?: Data;
  col: Column;
}
const Cell = ({ data, col }: CellProps) => {
  useWindowSize();
  const isDesktop = window.matchMedia(
    `only screen and (min-width: ${aqBootstrapTheme.grid.breakpoints.lg})`
  ).matches;
  const content =
    typeof data === "object" && "content" in data ? data.content : data;
  const title =
    typeof data === "object" && "title" in data ? data.title : data?.toString();
  return (
    <div style={{ maxWidth: col.maxWidth || "auto" }} title={title}>
      {col.hideIndex || isDesktop ? (
        <div>{content}</div>
      ) : (
        <>
          <span className="data-index">{col.title}</span>:{" "}
          <strong>{content}</strong>
        </>
      )}
    </div>
  );
};

const Element = styled.div<ElementProps>`
  grid-area: ${(p) => p.role};
  overflow: auto;
  ${(p) =>
    p.role === "title"
      ? `font-weight: ${p.theme.typography.fontWeight.medium};`
      : ""}
  ${(p) =>
    p.role === "overline"
      ? `color: ${p.theme.variants.primary}; margin-bottom: ${p.theme.grid.sizes[1]};`
      : ""}
  &.more-info {
    ${(p) =>
      p.isCompact
        ? `max-height: 0;
         overflow: hidden;`
        : `max-height: max-content;
          height: 100%;
    `}
  } ;
`;

const CardStyle = styled.div`
  display: grid;
  grid-column-gap: ${(p) => p.theme.grid.sizes[3]};
  grid-template-areas:
    "overline overline"
    "title cta"
    "more cta";
  grid-template-columns: 1fr auto;
  &:not(:last-child) {
    border-bottom: 1px solid ${(p) => p.theme.colors.gray300};
    padding-bottom: ${(p) => p.theme.grid.sizes[3]};
    margin-bottom: ${(p) => p.theme.grid.sizes[3]};
  }
  &.expandable {
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      "toggle-more overline overline"
      "toggle-more title cta"
      "more more more";
    .more-info {
      padding-left: calc(${(p) => p.theme.grid.sizes[3]} * 3);
      background-color: ${(p) => p.theme.colors.gray100};
      padding-top: ${(p) => p.theme.grid.sizes[2]};
      padding-bottom: ${(p) => p.theme.grid.sizes[2]};
      padding-right: ${(p) => p.theme.grid.sizes[2]};
    }
  }
  .data-index {
    text-transform: capitalize;
  }
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
          className={`${className} tbody cell ${
            col.borderedCell ? "borderedCell" : ""
          }`}
          key={`${dataRow.key}-${col.key}`}
        >
          <Cell data={dataRow[col.dataIndex]} col={col} />
        </div>
      ))}
    </>
  );

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
    let cardClasses = "table-card";
    if (isExpandable) cardClasses += " expandable";
    return (
      <CardStyle className={cardClasses}>
        {isExpandable && <ExpandButton />}
        {columns.map(
          (col) =>
            col.role &&
            col.role !== "border" && (
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
                <Cell
                  key={`${dataRow.key}-${col.key}`}
                  data={dataRow[col.dataIndex]}
                  col={col}
                />
              )
          )}
        </Element>
      </CardStyle>
    );
  };

  return window.matchMedia(
    `only screen and (min-width: ${aqBootstrapTheme.grid.breakpoints.lg})`
  ).matches ? (
    <BasicRow />
  ) : (
    <TableCard />
  );
};
