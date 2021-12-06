import styled from "styled-components";
import { BaseProps } from "../../shared/_types";
import { Button } from "../button/Button";

const SideBarIconButton = styled(Button)``;
export interface SidebarIconProps extends BaseProps {
  url: string;
  icon: React.ReactNode;
  active: boolean;
}

const SidebarIconBase = ({
  url,
  icon,
  active,
  className,
}: SidebarIconProps) => {
  return (
    <Button
      className={className}
      onClick={() => (window.location.href = url)}
      size="sm"
      type={"light"}
      data-testid="icon-button"
    >
      {icon}
    </Button>
  );
};

export const SidebarIcon = styled(SidebarIconBase)`
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.purple100
      : props.theme.colors.white} !important;
  svg {
    color: ${(props) =>
      props.active
        ? props.theme.palette.secondary
        : props.theme.variants.primary};
  }
`;
