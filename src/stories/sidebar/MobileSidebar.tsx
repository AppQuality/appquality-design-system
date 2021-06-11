import { SidebarProps } from "./SidebarProps";
import styled, { DefaultTheme } from "styled-components";
import { marginFromTop } from "./variables";
import { BoxArrowRight } from "react-bootstrap-icons";
import { LanguageIcons, LanguageIconWrapper } from "./LanguageIcons";

const SidebarMobileWrapper = styled.div(
  ({ theme }: { theme: DefaultTheme }) => {
    const { palette } = theme;
    return `
    min-height: calc(100vh - ${marginFromTop}px);
		background-color: ${palette.primary};
		position:sticky;
		width: 100%;
		padding-top: 20px;
		top: ${marginFromTop}px;
		color:#fff;
		button, a, svg {
			color:#fff;
			text-decoration: none;
		}
    ${LanguageIconWrapper} {
      margin: 20px 0;
      display: flex;
      justify-content: space-evenly;
      
      div, button {
        color: ${palette.primary};
        
        &:after{
          content: " ";
          width: 2px;
          background: #e3e3e3;
        }
      } 
    }
`;
  }
);

const MobileSidebarItem = styled.div`
  padding: 10px 20px;
  width: 100%;

  &.aq-last {
    border-bottom: 3px solid rgba(41, 114, 168, 0.3);
  }
  svg {
    min-width: 24px;
    margin: 0 8px;
  }
`;

const ContentWrapper = styled.div`
  display: none;
`;
const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  padding: 10px 8px;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  svg {
    margin: 0 5px;
  }
`;

export const MobileSidebar = ({
  children,
  items,
  languages,
  onLogout,
  open = false,
  route,
}: SidebarProps) => {
  if (!open) {
    return <>{children}</>;
  }
  return (
    <>
      <SidebarMobileWrapper>
        {items.map((i, idx) => {
          return (
            <MobileSidebarItem key={idx} className={i.last ? "aq-last" : ""}>
              {i.icon}
              <a href={i.url}>{i.text}</a>
            </MobileSidebarItem>
          );
        })}

        <LanguageIcons
          langs={[languages.current].concat(languages.others)}
          route={route}
        />
        <LogoutButton onClick={() => onLogout()}>
          Logout <BoxArrowRight />
        </LogoutButton>
      </SidebarMobileWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};
