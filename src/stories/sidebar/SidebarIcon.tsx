import { Button } from "../button/Button";

export interface SidebarIconProps {
  url: string;
  icon: React.ReactNode;
  active: boolean;
}

export const SidebarIcon = ({ url, icon, active }: SidebarIconProps) => {
  return (
    <Button
      onClick={() => (window.location.href = url)}
      size="sm"
      type={active ? "light" : "primary"}
      data-testid="icon-button"
    >
      {icon}
    </Button>
  );
};
