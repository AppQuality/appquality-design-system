import styled, { DefaultTheme } from "styled-components";
import { itemsSpacing } from "./variables";
export interface SidebarTextProps {
  url: string;
  text: string;
  active: boolean;
}

const SidebarTextDiv = styled.div(({ theme }: { theme: DefaultTheme }) => {
  const { palette, colors } = theme;
  return `
  margin-bottom: ${itemsSpacing}px;
  
  a,span {
    width:100%;
    font-size: 14px;
    line-height: 150%;
    padding: 6px 8px 5px;
    display:block;
    color: ${palette.primaryVariant};
    font-weight: bold;
    text-decoration: none;
    &:hover {
      background-color: ${colors.purple100};
    }
  }

  &.active {
    a,span {
      background-color: ${colors.purple100};
      color: ${palette.secondary};
      &:hover {
        background-color: ${palette.secondaryVariant};
      }
    }
  }
  
`;
});
export const SidebarText = ({ url, text, active }: SidebarTextProps) => {
  return (
    <SidebarTextDiv className={active ? "active" : undefined}>
      {active ? <span>{text}</span> : <a href={url}>{text}</a>}
    </SidebarTextDiv>
  );
};
