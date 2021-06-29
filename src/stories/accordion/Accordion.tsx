import React, { useState } from "react";
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

const ItemBody = ({ children }: ItemBodyProps) => {
  return <div className="item-body">{children}</div>;
};

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

const BasicAccordion = ({ active, children, className }: AccordionProps) => {
  let [current, setCurrent] = useState(active);
  let accordionHead: React.ReactNode = null;
  const items = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      return React.cloneElement(child, { active: current === child.props.id });
    }
    return null;
  });
  return <div className="accordion">{items}</div>;
};

BasicAccordion.Item = Item;
Item.Head = ItemHead;
Item.Body = ItemBody;

export const Accordion = styled(BasicAccordion)``;
