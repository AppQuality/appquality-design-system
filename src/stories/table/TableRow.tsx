import { CardRole, TableRowProps } from "./_types";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import { ChevronDown, ChevronUp, CaretDownFill } from "react-bootstrap-icons";
import styled from "styled-components";
import { useState } from "react";
import caret from "../../shared/assets/caret-up.svg";
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
          style={{ maxWidth: col.maxWidth || "auto" }}
        >
          {dataRow[col.dataIndex]}
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
          <img
            src={caret}
            width="20px"
            style={{ transform: "rotate(180deg)" }}
          />
        ) : (
          <img src={caret} width="20px" />
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
                {dataRow[col.dataIndex]}
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
                  {col.dataIndex}: <strong>{dataRow[col.dataIndex]}</strong>
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
      padding-left: calc(${(p) => p.theme.grid.sizes[3]} * 2);
      background-color: ${(p) => p.theme.colors.gray100};
    }
  }
`;

interface ElementProps {
  readonly role?: CardRole | "more" | "toggle-more";
  readonly isCompact?: boolean;
}

const Element = styled.div<ElementProps>`
  grid-area: ${(p) => p.role};
  ${(p) => (p.role === "title" ? `font-weight: 600;` : "")}
  ${(p) => (p.role === "overline" ? `color: ${p.theme.variants.primary};` : "")}
  &.more-info {
    ${(p) =>
      p.isCompact
        ? `max-height: 0;
         overflow: hidden;`
        : `max-height: max-content;
         padding-top: ${p.theme.grid.sizes[1]};
         padding-bottom: ${p.theme.grid.sizes[1]};`}
  } ;
`;
