import React, { useState } from "react";
// import {Accordion} from './_style';
import styled from "styled-components";
import {
  AccordionProps,
  ItemProps,
  ItemHeadProps,
  ItemBodyProps,
} from "./_types";

const ItemHead = ({ children }: ItemHeadProps) => {
  return <div className="item-head">{children}</div>;
};
export const StyledItemHead = styled(ItemHead)`
  ${(props) => (!props.disabled ? `cursor: pointer;` : "")}
  ${(props) =>
    props.active
      ? `box-shadow: inset 0px -2px 0 ${props.theme.palette.primary};`
      : ""}
  color: ${(props) =>
    props.active
      ? props.theme.palette.success
      : props.disabled
      ? props.theme.colors.disabledDark
      : props.theme.palette.secondary};
  &:hover {
    ${(props) =>
      !props.disabled ? ` background: ${props.theme.colors.gray200};` : ""}
  }
`;

const ItemBody = ({ children }: ItemBodyProps) => {
  return <div className="item-body">{children}</div>;
};
export const StyledItemBody = styled(ItemBody)`
  background-color: deeppink;
`;

const Item = ({ id, active, children }: ItemProps) => {
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
    <div className="accordion-item">
      {head}
      {body}
    </div>
  );
};
export const StyledItem = styled(Item);

export const BasicAccordion = ({
  initialActive,
  children,
  className,
}: AccordionProps) => {
  let [current, setCurrent] = useState(initialActive);
  let accordionHead: React.ReactNode = null;
  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      return React.cloneElement(child, { active: current === child.props.id });
    }
    return null;
  });
  return <div className="accordion">{items}</div>;
};

Accordion.Item = Item;
Item.Head = ItemHead;
Item.Body = ItemBody;

export const Accordion = styled(BasicAccordion)`
  background: #fff;
  .accordion {
    display: flex;
  }
  .item-head {
    max-height: 8px;
  }
  ${StyledItemHead} {
    max-height: 10px;
  }
`;
