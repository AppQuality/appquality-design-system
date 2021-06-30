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

const ItemHead = ({
  children,
  setActive,
  itemId,
  active,
  disabled,
}: ItemHeadProps) => {
  const handleActive = () => {
    if (active) {
      setActive("");
    } else {
      setActive(itemId);
    }
  };

  return (
    <StyledItemHead onClick={handleActive} active={active} disabled={disabled}>
      {children}
      <ChevronDown className="accordion-head-icon" />
    </StyledItemHead>
  );
};
export const StyledItemHead = styled.div(
  ({ theme, active, disabled }: StyledItemHeadProps) => {
    return `
      ${!disabled ? `cursor: pointer;` : ""}
      color: ${
        active
          ? theme.palette.success
          : disabled
          ? theme.colors.disabledDark
          : theme.palette.primary
      };
      font-size: ${theme.typography.fontSize.base};
      font-weight: ${theme.typography.fontWeight.normal};
      padding: ${theme.grid.spacing.default};
      display: grid;
      grid-template-columns: 1fr 21px;
      
      .accordion-head-icon {
        width: 24px;
        height: 24px;
        color: ${theme.palette.primary};
        transition: transform 200ms;
        transform: rotate(0deg);
        ${active && ` transform: rotate(180deg);`}
        
        @media (min-width: ${theme.grid.breakpoints.lg}) {
          width: 21px;
          height: 21px;
        }
      }
      &:hover {
        ${!disabled ? ` background: ${theme.colors.gray200};` : ""}
      }
    `;
  }
);

const ItemBody = ({ children, active, ...props }: ItemBodyProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref && "current" in ref && ref.current)
      setHeight(ref.current.offsetHeight);
  }, [ref]);
  return (
    <StyledItemBody height={height} active={active}>
      <div ref={ref} className="item-body-container">
        {children}
      </div>
    </StyledItemBody>
  );
};
export const StyledItemBody = styled.div(
  ({ theme, height, active }: StyledItemBodyProps) => `
    --accordion-element-height: ${height}px;
    background-color: #fff;
    overflow: hidden;
    max-height: ${active ? "auto" : "0px"};
    transition: max-height 300ms;
    
    .item-body-container {
      padding: ${theme.grid.spacing.default};
    }
`
);

const Item = ({
  children,
  active,
  title,
  id,
  setActive,
  disabled,
}: ItemProps) => {
  let body = null;
  return (
    <div className="accordion-item">
      <ItemHead
        itemId={id}
        active={active}
        disabled={disabled}
        setActive={(id: string) => setActive && setActive(id)}
      >
        {title}
      </ItemHead>
      <CSSTransition timeout={300} classNames="accordion-body" in={active}>
        <ItemBody active={active}>{children}</ItemBody>
      </CSSTransition>
    </div>
  );
};

export const StyledAccordion = styled.div`
  border: 1px solid ${(props) => props.theme.colors.disabled};
  border-radius: ${(props) => props.theme.general.borderRadius};

  .accordion-item:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.disabled};
  }
  .accordion-body-enter {
    max-height: var(--accordion-element-height);
  }
  .accordion-body-exit {
    max-height: var(--accordion-element-height);
    transition-delay: 100ms;
  }
  .accordion-body-exit-active {
    max-height: 0px;
  }
`;

const Accordion = ({ initialActive, children }: AccordionProps) => {
  let [current, setCurrent] = useState(initialActive);
  let items: React.ReactNode = null;
  items = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      const { id, disabled } = child.props;
      return React.cloneElement(child, {
        disabled: disabled,
        active: id === current,
        id: id,
        key: id,
        setActive: setCurrent,
      });
    }
    return null;
  });
  return <StyledAccordion>{items}</StyledAccordion>;
};

Accordion.Item = Item;

export { Accordion };
