import { DesktopSidebar } from "./DesktopSidebar";
import { MobileSidebar } from "./MobileSidebar";
import { SidebarProps } from "./SidebarProps";
import { useWindowSize } from "../../shared/effects";
import { sidebarWidth } from "./variables";
import styled from "styled-components";

const ContentWrapper = styled.div<{ hidden: boolean; mobile: boolean }>`
  ${(props) =>
    !props.mobile
      ? `
  width: calc(100% - ${sidebarWidth}px);
  float: right;
  z-index: 0;
  position: relative;
  `
      : ""}
  ${(props) => (props.hidden ? "display: none" : "")};
`;
export const Sidebar = ({
  children,
  items,
  languages,
  open = false,
  route,
  onLogout,
  onSidebarEnter,
  onSidebarLeave,
}: SidebarProps) => {
  useWindowSize();
  if (window.matchMedia("only screen and (max-width: 768px)").matches) {
    return (
      <>
        <MobileSidebar
          items={items}
          languages={languages}
          open={open}
          onLogout={onLogout}
          route={route}
        ></MobileSidebar>
        <ContentWrapper mobile={true} hidden={open}>
          {children}
        </ContentWrapper>
      </>
    );
  }
  return (
    <>
      <DesktopSidebar
        items={items}
        languages={languages}
        open={open}
        route={route}
        onLogout={onLogout}
        onSidebarEnter={onSidebarEnter}
        onSidebarLeave={onSidebarLeave}
      ></DesktopSidebar>
      <ContentWrapper mobile={false} hidden={false}>
        {children}
      </ContentWrapper>
    </>
  );
};
