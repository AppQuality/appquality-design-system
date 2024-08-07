import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import styled from "styled-components";
import { useWindowSize } from "../../shared/effects/useWindowSize";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { CardRole, Column, Data, TableRowProps } from "./_types";

interface ElementProps {
  readonly role?: CardRole | "more" | "toggle-more";
  readonly isCompact?: boolean;
  readonly isExpandable?: boolean;
  readonly borderedCellColor?: string;
}

interface ElementAlternativeProps {
  readonly borderedCellColor?: string;
}

interface CardAlternativeProps {
  readonly highlightedColor?: string;
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
    typeof data === "object" && "content" in data
      ? (data.content as React.ReactNode)
      : (data as React.ReactNode);
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

const CardAlternativeStyle = styled.div<CardAlternativeProps>`
  display: grid;
  grid-column-gap: ${(p) => p.theme.grid.sizes[3]};
  grid-template-columns: 6px auto max-content auto auto;
  border-bottom: 1px solid ${(p) => p.theme.colors.gray300};
  &.highlighted {
    background: ${(p) => p.highlightedColor};
  }
`;

const ElementAlternative = styled.div<ElementAlternativeProps>`
  overflow: auto;
  background: ${(p) => p.borderedCellColor};
  padding-top: ${(p) => p.theme.grid.sizes[4]};
  padding-bottom: ${(p) => p.theme.grid.sizes[4]};
  font-weight: ${(p) => p.theme.typography.fontWeight.medium};
  display: flex;
  align-items: center;
  ${(p) =>
    p.borderedCellColor ? `box-shadow: 0 1px 0 ${p.theme.colors.white};` : ""};
`;

const ElementsContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div:first-child {
    color: ${(p) => p.theme.variants.primary};
  }
  div:not(:first-child) {
    font-weight: ${(p) => p.theme.typography.fontWeight.medium};
  }
`;

export const TableRow = ({
  columns,
  dataRow,
  isExpandable,
  className,
  mobileAlternative,
  borderedCellColor,
  highlightedColor,
}: TableRowProps) => {
  useWindowSize();

  const BasicRow = () => (
    <>
      {columns.map((col, i) => {
        const data = dataRow[col.dataIndex];
        const style =
          typeof data === "object" && "style" in data ? data.style : {};
        return (
          <div
            className={`${className} tbody cell ${
              col.borderedCell ? "borderedCell" : ""
            } ${dataRow.highlighted && !col.borderedCell ? "highlighted" : ""}
            ${columns.length - 1 === i ? "lastRowCell" : ""}
            `}
            style={style}
            key={`${dataRow.key}-${col.key}`}
          >
            <Cell data={dataRow[col.dataIndex]} col={col} />
          </div>
        );
      })}
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

  const TableCardAlternative = () => {
    let cardClasses = "table-card";
    if (dataRow.highlighted) cardClasses += " highlighted";
    return (
      <CardAlternativeStyle
        className={cardClasses}
        highlightedColor={highlightedColor}
      >
        {columns.map(
          (col) =>
            (col.role === "border" || col.role === "left") && (
              <ElementAlternative
                key={`${dataRow.key}-${col.key}`}
                borderedCellColor={
                  col.role === "border" ? borderedCellColor : undefined
                }
              >
                <Cell data={dataRow[col.dataIndex]} col={col} />
              </ElementAlternative>
            )
        )}
        <ElementsContainer>
          {columns.map(
            (col) =>
              !col.role && (
                <div key={`${dataRow.key}-${col.key}`}>
                  {dataRow[col.dataIndex] as React.ReactNode}
                </div>
              )
          )}
        </ElementsContainer>
        {columns.map(
          (col) =>
            col.role === "right" && (
              <ElementAlternative key={`${dataRow.key}-${col.key}`}>
                <Cell data={dataRow[col.dataIndex]} col={col} />
              </ElementAlternative>
            )
        )}
      </CardAlternativeStyle>
    );
  };

  return window.matchMedia(
    `only screen and (min-width: ${aqBootstrapTheme.grid.breakpoints.lg})`
  ).matches ? (
    <BasicRow />
  ) : !mobileAlternative ? (
    <TableCard />
  ) : (
    <TableCardAlternative />
  );
};
