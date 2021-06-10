import { UserInfo } from "./UserInfo";
import { HeaderProps } from "./_types";
import { useWindowSize } from "../../shared/effects";
import { Hamburger } from "../button/HamburgerButton";
import styled from "styled-components";

const headerHeight = 54;
const contentHeight = 30;
const StyledHeader = styled.div`
  position: sticky;
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
  }
  .user-info {
    display: flex;
    align-items: center;
    position: relative;
  }
  .user-name {
    margin-right: 10px;
  }
  .user-id {
    color: ${(props) => props.theme.colors.disabledDark};
  }
  .user-avatar {
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    img {
      max-height: ${contentHeight}px;
      max-width: ${contentHeight}px;
    }
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
  showLogin = true,
  isLoading,
  isMenuOpen,
  toggleMenu,
  user,
  className,
}: HeaderProps) => {
  useWindowSize();
  const handleLoginClick = () => {
    window.location.href = "/";
  };
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

  const showMobile = window.matchMedia("only screen and (max-width: 768px)")
    .matches;

  return (
    <StyledHeader className={className}>
      <div className="brand-logo">
        {logo ? (
          { logo }
        ) : (
          <a href={logoUrl}>
            <img
              alt="logo"
              src="https://crowd.app-quality.com/wp-content/themes/crowdappquality/img/aq_vector_logo_light_crowd.svg"
            />
          </a>
        )}
      </div>
      <div className="header-menu" />
      {showMobile && user ? (
        <Hamburger isOpen={isMenuOpen} clickToggle={toggleMenu} />
      ) : (
        <UserInfo
          showLogin={showLogin}
          user={user}
          isLoading={isLoading}
          onLogin={handleLoginClick}
          onLogout={handleLogoutClick}
        />
      )}
    </StyledHeader>
  );
};
