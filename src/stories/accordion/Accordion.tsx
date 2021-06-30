import React, { useState, createRef, useRef, useEffect } from "react";
import { Text, Title } from "../typography/Typography";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import {
  AccordionProps,
  ItemProps,
  ItemHeadProps,
  StyledItemHeadProps,
  StyledItemBodyProps,
  ItemBodyProps,
} from "./_types";

const ItemHead = ({ children, setActive, ...props }: ItemHeadProps) => {
  return (
    <StyledItemHead onClick={setActive} {...props}>
      {children}
      <ChevronDown />
    </StyledItemHead>
  );
};
export const StyledItemHead = styled.div((props: StyledItemHeadProps) => {
  return `
      ${!props.disabled ? `cursor: pointer;` : ""}
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
    `;
});

const ItemBody = React.forwardRef<HTMLDivElement>(
  ({ children, active, ...props }: ItemBodyProps, ref) => {
    const anotherRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
      if (anotherRef && "current" in anotherRef && anotherRef.current)
        setHeight(anotherRef.current.offsetHeight);
    }, [anotherRef]);
    return (
      <StyledItemBody ref={ref} height={height} active={active}>
        <div ref={anotherRef} className="item-body-container">
          {children}
        </div>
      </StyledItemBody>
    );
  }
);
export const StyledItemBody = styled.div(
  ({ theme, height, active }: StyledItemBodyProps) => `
    --accordion-element-height: ${height}px;
    background-color: #fff;
    overflow: hidden;
    max-height: ${active ? "auto" : "0px"};
    transition: max-height 300ms;
    > * {
      padding: ${theme.grid.spacing.default};
    }
`
);

const Item = ({ children, active, id, ...props }: ItemProps) => {
  let body = null;
  const ref = React.createRef();
  const head = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ItemHead) {
      return React.cloneElement(child, {
        active: active,
        ...props,
      });
    }
    return null;
  });
  body = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ItemBody) {
      return React.cloneElement(child, {
        active: active,
        ref: ref,
      });
    }
    return null;
  });
  return (
    <StyledItem id={id}>
      {head}
      <CSSTransition timeout={300} classNames="accordion-item" in={active}>
        <>{body}</>
      </CSSTransition>
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
  .accordion-item-enter {
    max-height: var(--accordion-element-height);
  }
  .accordion-item-exit {
    max-height: var(--accordion-element-height);
    transition-delay: 100ms;
  }
  .accordion-item-exit-active {
    max-height: 0px;
  }
`;

const Accordion = ({ initialActive, children, ...props }: AccordionProps) => {
  let [current, setCurrent] = useState(initialActive);
  let items: React.ReactNode = null;
  items = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      const { id, disabled } = child.props;
      return React.cloneElement(child, {
        disabled: disabled,
        active: id === current,
        setActive: () => {
          if (!disabled) setCurrent(id);
        },
      });
    }
    return null;
  });
  return <StyledAccordion {...props}>{items}</StyledAccordion>;
};

Accordion.Item = Item;
Item.Head = ItemHead;
Item.Body = ItemBody;

export { Accordion };
