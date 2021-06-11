import React from "react";
import styled from "styled-components";

const HamburgerButton = ({
  isOpen,
  clickToggle,
  className,
}: {
  isOpen?: boolean;
  clickToggle?: () => void;
  className?: string;
}) => {
  return (
    <div className={className} onClick={clickToggle}>
      <span className="mobile-bar bar-1" />
      <span className="mobile-bar bar-2" />
      <span className="mobile-bar bar-3" />
    </div>
  );
};

export const Hamburger = styled(HamburgerButton)`
  width: 35px;
  top: 16px;
  right: 20px;
  height: 20px;
  & > .mobile-bar {
    border-bottom: 2px solid #000;
    width: 35px;
    display: block;
    position: absolute;
    transition: 0.25s ease-in-out;
    will-change: transform;
  }

  & > .mobile-bar.bar-1 {
    top: 0;
  }

  & > .mobile-bar.bar-2 {
    top: 10px;
  }

  & > .mobile-bar.bar-3 {
    top: 20px;
  }

  ${(props) =>
    props.isOpen
      ? `
      & > .mobile-bar.bar-1 {
        top: 10px;
        transform: rotate(135deg);
      }

      & > .mobile-bar.bar-2 {
        display: none;
      }

      & > .mobile-bar.bar-3 {
        top: 10px;
        transform: rotate(-135deg);
      }
    `
      : ""}
`;
