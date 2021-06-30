import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { CSSTransition } from "react-transition-group";
import { StyledAccordion, StyledItemHead, StyledItemBody } from "./_style";
import {
  AccordionProps,
  ItemProps,
  ItemHeadProps,
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
    if (disabled) return;
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

const Item = ({
  children,
  active,
  title,
  id,
  setActive,
  disabled,
}: ItemProps) => {
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
