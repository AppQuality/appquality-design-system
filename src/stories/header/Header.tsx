import "./header.scss";
import { UserInfo } from "./UserInfo";
import { HeaderProps } from "./_types";
import { useWindowSize } from "../../shared/effects";
import { Hamburger } from "../button/HamburgerButton";
import styled from "styled-components";

const StyledHeader = styled.div`
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
    <StyledHeader className="site-header">
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
