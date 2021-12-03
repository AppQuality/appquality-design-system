import { BoxArrowRight } from "react-bootstrap-icons";
import styled, { DefaultTheme } from "styled-components";
import { LanguageIcons, LanguageIconWrapper } from "./LanguageIcons";
import { SidebarProps } from "./SidebarProps";
import { marginFromTop } from "./variables";

const SidebarMobileWrapper = styled.div(
  ({ theme, hidden }: { theme: DefaultTheme; hidden: boolean }) => {
    const { palette, colors } = theme;
    return `
    ${hidden ? "display:none" : ""}
    min-height: calc(100vh - ${marginFromTop}px);
		background-color: ${colors.white};
		position:sticky;
		width: 100%;
		padding-top: 20px;
		top: ${marginFromTop}px;
		color:#fff;
		button, a, svg {
			color:${palette.primaryVariant};
			text-decoration: none;
		}
    ${LanguageIconWrapper} {
      margin: 20px 0;
      display: flex;
      justify-content: space-evenly;
      
      div, button {
        font-weight: bold;
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
  display: flex;
  align-items: center;
  font-weight: bold;

  &.aq-last {
    border-bottom: 1px solid ${({ theme }) => theme.colors.elementGeneric};
  }
  &.aq-active {
    a,
    svg {
      color: ${({ theme }) => theme.palette.secondary};
    }
  }
  svg {
    width: 1.5em;
    height: 1em;
    margin: 0 0.5em;
  }
  a {
    height: 1.5em;
    line-height: calc(1.5em + 1px);
  }
`;

const ContentWrapper = styled.div`
  ${(props) => (props.hidden ? "display: none" : "")};
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
    color: ${(props) => props.theme.palette.danger};
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
  return (
    <>
      <SidebarMobileWrapper hidden={!open}>
        {items.map((i, idx) => {
          let classNames = [];
          i.last && classNames.push("aq-last");
          i.active && classNames.push("aq-active");
          return (
            <MobileSidebarItem key={idx} className={classNames.join(" ")}>
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
      <ContentWrapper hidden={open}>{children}</ContentWrapper>
    </>
  );
};
