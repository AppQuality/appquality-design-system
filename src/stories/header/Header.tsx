import styled from "styled-components";
import tryberLogo from "../../shared/assets/logo.png";
import { useWindowSize } from "../../shared/effects";
import { Hamburger } from "../button/HamburgerButton";
import { UserInfo } from "./UserInfo";
import { HeaderProps } from "./_types";

const headerHeight = 54;
const contentHeight = 30;
const HeaderSpacer = styled.div`
  position: sticky;
  top: 0;
  height: ${headerHeight}px;
  padding: ${(headerHeight - contentHeight) / 2}px;
`;
const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: ${headerHeight}px;
  padding: ${(headerHeight - contentHeight) / 2}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  background: #fff;
  .brand-logo {
    flex: 0 1 150px;
    max-height: ${contentHeight}px;
    a {
      display: flex;
      img {
        height: 20px;
      }
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    position: relative;
  }
  .user-name {
    color: ${(props) => props.theme.palette.primary};
  }
  .user-avatar {
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    height: ${contentHeight}px;
    width: ${contentHeight}px;

    &.verified:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 15px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.green500};
    }
  }
  ${Hamburger} {
    position: absolute;
  }
`;

export const Header = ({
  logo,
  logoUrl,
  onLogin,
  isLoading,
  isMenuOpen,
  toggleMenu,
  user,
  className,
  loginText = "login",
}: HeaderProps) => {
  useWindowSize();
  const handleLogoutClick = () => {
    fetch("/wp-admin/admin-ajax.php?action=appq_wp_logout", {
      method: "GET",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const showMobile = window.matchMedia(
    "only screen and (max-width: 768px)"
  ).matches;

  return (
    <>
      <HeaderSpacer />
      <StyledHeader className={className}>
        <div className="brand-logo">
          {logo ? (
            <>{logo}</>
          ) : (
            <a href={logoUrl}>
              <img alt="logo" src={tryberLogo} />
            </a>
          )}
        </div>
        <div className="header-menu" />
        {showMobile && user ? (
          <Hamburger isOpen={isMenuOpen} clickToggle={toggleMenu} />
        ) : (
          <UserInfo
            user={user}
            isLoading={isLoading}
            onLogin={onLogin}
            onLogout={handleLogoutClick}
            loginText={loginText}
          />
        )}
      </StyledHeader>
    </>
  );
};
