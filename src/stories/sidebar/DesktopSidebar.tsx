import styled, { DefaultTheme } from "styled-components";
import {
  itemsSpacing,
  sidebarItemsWidth,
  sidebarWidth,
  marginFromTop,
} from "./variables";
import { LanguageIcons, LanguageIconWrapper } from "./LanguageIcons";
import { ButtonStyle } from "../button/_style";
import { SidebarIcon } from "./SidebarIcon";
import { SidebarText } from "./SidebarText";
import { SidebarProps } from "./SidebarProps";

const SidebarWrapper = styled.div(({ theme }: { theme: DefaultTheme }) => {
  const { palette } = theme;
  return `
   height:calc(100vh - ${marginFromTop}px);
   top:${marginFromTop}px;
   position:sticky;
   float:left;
   left:0;
   width: ${sidebarWidth}px;
   z-index: 1;
   
   ${SidebarIcons} {
     position:relative;
     top:0;
    z-index: 1;
    padding: ${itemsSpacing}px;
    background-color:${palette.primary};
   }
   ${SidebarIcons}, ${SidebarItems} {
    padding-top: 20px;
    height:100%;
   }
   ${SidebarItems} {
     position:absolute;
     top:0;
     background-color:${palette.info};
   }
   ${ButtonStyle} {
     margin-bottom: ${itemsSpacing}px;
     box-shadow: none;
     padding: 0;
     width: 32px;
     height: 32px;
     &:active:focus,&:focus{
       box-shadow: none;
     }
   }
   ${ButtonStyle} svg {
     margin: 4px 0;
     font-size:18px;
   }
   ${LanguageIconWrapper} {
     position: absolute;
     bottom: ${itemsSpacing}px;
   }
`;
});

const SidebarIcons = styled.div``;
const SidebarItems = styled.div(({ open = false }: { open: boolean }) => {
  return `
    transition: transform .2s ease;
    width: ${sidebarItemsWidth}px;
    transform: translate3d(${open ? `${sidebarWidth}px` : "-100%"} ,0,0);
    
    ${LanguageIconWrapper} div,
    ${LanguageIconWrapper} button{
  		margin: 0 8px;
    }
`;
});

const NavigationContainer = styled.div`
  width: calc(100% - ${sidebarWidth}px);
  float: right;
`;
export const DesktopSidebar = ({
  children,
  items,
  languages,
  onSidebarEnter,
  onSidebarLeave,
  open = false,
  route,
}: SidebarProps) => {
  return (
    <>
      <SidebarWrapper
        onMouseEnter={onSidebarEnter}
        onMouseLeave={onSidebarLeave}
      >
        <SidebarIcons>
          {items.map((i, idx) => (
            <SidebarIcon
              key={idx}
              url={i.url}
              icon={i.icon}
              active={i.active}
            />
          ))}
          <LanguageIcons langs={[languages.current]} route={route} />
        </SidebarIcons>
        <SidebarItems open={open}>
          <div>
            {items.map((i, idx) => (
              <SidebarText key={idx} url={i.url} text={i.text} />
            ))}
            <LanguageIcons langs={languages.others} route={route} />
          </div>
        </SidebarItems>
      </SidebarWrapper>
      <NavigationContainer>{children}</NavigationContainer>
      <div style={{ clear: "both" }} />
    </>
  );
};
