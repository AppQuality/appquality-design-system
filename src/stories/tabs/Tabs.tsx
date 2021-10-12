import React, { useState } from "react";
import styled from "styled-components";
import { TabsProps, TabProps, TabHeadProps } from "./_types";

const TabHeadContainer = styled.div`
  display: flex;
  width: 100%;
  box-shadow: inset 0px -1px 0 ${(props) => props.theme.colors.disabled};
  overflow: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BasicTabHead = ({
  active,
  disabled,
  title,
  setActive,
  className,
}: TabHeadProps) => (
  <div className={className} onClick={!disabled ? setActive : undefined}>
    {title}
  </div>
);
export const TabHead = styled(BasicTabHead)`
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

export const Tab = ({ id, active, children }: TabProps) =>
  active ? <div>{children}</div> : null;

//() = setActive('asd')
const BasicTabs = ({ active, children, className, setActive }: TabsProps) => {
  let [current, setCurrent] = useState(active);
  if (!setActive) {
    setActive = setCurrent;
    active = current;
  }
  let tabHead: React.ReactNode = null;
  const tabs = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Tab) {
      tabHead = (
        <>
          {tabHead}
          <TabHead
            active={active === child.props.id}
            id={child.props.id}
            title={child.props.title}
            disabled={child.props.disabled}
            setActive={() => setActive && setActive(child.props.id)}
          />
        </>
      );
      return React.cloneElement(child, { active: active === child.props.id });
    }
    return null;
  });
  return (
    <div className={className}>
      <TabHeadContainer>{tabHead}</TabHeadContainer>
      {tabs}
    </div>
  );
};

export const Tabs = styled(BasicTabs)`
  ${TabHead} {
    flex-grow: 1;
    white-space: nowrap;
    flex-wrap: nowrap;
    padding: 10px 16px;
    text-align: center;
    font-weight: ${(props) => props.theme.typography.fontWeight.medium};

    @media (min-width: ${(props) => props.theme.grid.breakpoints.md}) {
      flex-grow: 0;
    }
  }
`;

export type { TabsProps, TabProps };
