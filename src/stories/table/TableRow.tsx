import { CardRole, TableRowProps } from "./_types";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import styled from "styled-components";
import { useState } from "react";

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
          {dataRow[col.dataIndex]}
        </div>
      ))}
    </>
  );

  const TableCard = () => {
    const [isCompact, setIsCompact] = useState(true);
    const toggleCompact = () => {
      setIsCompact(!isCompact);
    };
    const ExpandButton = () => (
      <Element role="toggle-more" onClick={toggleCompact}>
        {isCompact ? <ChevronDown /> : <ChevronUp />}
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
                  if (col.role !== "cta") toggleCompact();
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
                  {col.dataIndex}: {dataRow[col.dataIndex]}
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
  grid-column-gap: ${(p) => p.theme.grid.sizes[1]};
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
  }
`;

interface ElementProps {
  readonly role?: CardRole | "more" | "toggle-more";
  readonly isCompact?: boolean;
}

const Element = styled.div<ElementProps>`
  grid-area: ${(props) => props.role};
  ${(props) => (props.role === "title" ? `font-weight: 600;` : "")}
  &.more-info {
    padding-left: calc(${(p) => p.theme.grid.sizes[3]} * 2);
    background-color: ${(p) => p.theme.colors.gray100};
    ${(props) =>
      props.isCompact
        ? `max-height: 0;
         overflow: hidden;`
        : `max-height: max-content;
         padding-top: ${props.theme.grid.sizes[1]};
         padding-bottom: ${props.theme.grid.sizes[1]};`}
  } ;
`;
