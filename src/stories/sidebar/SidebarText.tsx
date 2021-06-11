import { itemsSpacing } from "./variables";
import styled, { DefaultTheme } from "styled-components";
export interface SidebarTextProps {
  url: string;
  text: string;
}

const SidebarTextDiv = styled.div(({ theme }: { theme: DefaultTheme }) => {
  const { palette } = theme;
  return `
  margin-bottom: ${itemsSpacing}px;
  
  a {
    width:100%;
    font-size: 14px;
    line-height: 150%;
    padding: 6px 8px 5px;
    display:block;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      background-color: ${palette.primary}
    }
  }
`;
});
export const SidebarText = ({ url, text }: SidebarTextProps) => {
  return (
    <SidebarTextDiv>
      <a href={url}>{text}</a>
    </SidebarTextDiv>
  );
};
