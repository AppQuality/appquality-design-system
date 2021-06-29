import React, { useState } from "react";
// import {Accordion} from './_style';
import styled from "styled-components";
import {
  AccordionProps,
  ItemProps,
  ItemHeadProps,
  StyledItemHeadProps,
  ItemBodyProps,
} from "./_types";

const ItemHead = ({ children, ...props }: ItemHeadProps) => {
  return <StyledItemHead {...props}>{children}</StyledItemHead>;
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
      : props.theme.palette.secondary
  };
  &:hover {
    ${!props.disabled ? ` background: ${props.theme.colors.gray200};` : ""}
  }
`
);

const ItemBody = ({ children, className }: ItemBodyProps) => {
  return <div className={className}>{children}</div>;
};
export const StyledItemBody = styled.div`
  background-color: deeppink;
`;

const Item = ({ id, active, children, className }: ItemProps) => {
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
    <div className={className}>
      {head}
      {body}
    </div>
  );
};
export const StyledItem = styled.div``;

const Accordion = ({ initialActive, children, className }: AccordionProps) => {
  let [current, setCurrent] = useState(initialActive);
  let accordionHead: React.ReactNode = null;
  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      return React.cloneElement(child, { active: current === child.props.id });
    }
    return null;
  });
  return <div className={className}>{items}</div>;
};

Accordion.Item = Item;
Item.Head = ItemHead;
Item.Body = ItemBody;

export { Accordion };
