import { DesktopSidebar } from "./DesktopSidebar";
import { MobileSidebar } from "./MobileSidebar";
import { SidebarProps } from "./SidebarProps";
import { useWindowSize } from "../../shared/effects";

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
      <MobileSidebar
        items={items}
        languages={languages}
        open={open}
        onLogout={onLogout}
        route={route}
      >
        {children}
      </MobileSidebar>
    );
  }
  return (
    <DesktopSidebar
      items={items}
      languages={languages}
      open={open}
      route={route}
      onLogout={onLogout}
      onSidebarEnter={onSidebarEnter}
      onSidebarLeave={onSidebarLeave}
    >
      {children}
    </DesktopSidebar>
  );
};
