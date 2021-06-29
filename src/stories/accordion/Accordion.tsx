import React, { useState } from "react";
import { Text, Title } from "../typography/Typography";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import styled from "styled-components";
import {
  AccordionProps,
  ItemProps,
  ItemHeadProps,
  StyledItemHeadProps,
  ItemBodyProps,
} from "./_types";

const ItemHead = ({ children, ...props }: ItemHeadProps) => {
  return (
    <StyledItemHead {...props}>
      {children}
      <ChevronDown />
    </StyledItemHead>
  );
};
export const StyledItemHead = styled.div(
  (props: StyledItemHeadProps) => `
  ${!props.disabled ? `cursor: pointer;` : ""}
  ${
    props.active
      ? `box-shadow: inset 0px -2px 0 ${props.theme.palette.primary};`
      : ""
  }
  color: ${
    props.active
      ? props.theme.palette.success
      : props.disabled
      ? props.theme.colors.disabledDark
      : props.theme.palette.primary
  };
  font-size: ${props.theme.typography.fontSize.base};
  font-weight: ${props.theme.typography.fontWeight.normal};
  padding: ${props.theme.grid.spacing.default};
  display: grid;
  grid-template-columns: 1fr 21px;
  > svg {
    width: 24px;
    height: 24px;
    @media (min-width: ${props.theme.grid.breakpoints.lg}) {
      width: 21px;
      height: 21px;
    } 
  }
  &:hover {
    ${!props.disabled ? ` background: ${props.theme.colors.gray200};` : ""}
  }
`
);

const ItemBody = ({ children, ...props }: ItemBodyProps) => {
  return <StyledItemBody>{children}</StyledItemBody>;
};
export const StyledItemBody = styled.div`
  background-color: #fff;
  padding: ${(props) => props.theme.grid.spacing.default};
`;

const Item = ({ children, ...props }: ItemProps) => {
  const head = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ItemHead) {
      return React.cloneElement(child);
    }
    return null;
  });
  const body = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ItemBody) {
      return React.cloneElement(child);
    }
    return null;
  });
  return (
    <StyledItem {...props}>
      {head}
      {body}
    </StyledItem>
  );
};
export const StyledItem = styled.div``;
export const StyledAccordion = styled.div`
  border: 1px solid ${(props) => props.theme.colors.disabled};
  border-radius: ${(props) => props.theme.general.borderRadius};

  ${StyledItem}:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.disabled};
  }
`;

const Accordion = ({ initialActive, children, ...props }: AccordionProps) => {
  let [current, setCurrent] = useState(initialActive);
  let accordionHead: React.ReactNode = null;
  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      return React.cloneElement(child, { active: current === child.props.id });
    }
    return null;
  });
  return <StyledAccordion {...props}>{items}</StyledAccordion>;
};

Accordion.Item = Item;
Item.Head = ItemHead;
Item.Body = ItemBody;

export { Accordion };
