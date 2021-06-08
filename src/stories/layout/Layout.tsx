import React, { ReactNode } from "react";
import styled from "styled-components";
import "./layout.scss";

export interface LayoutProps {
  /**
   * contents
   */
  children?: ReactNode;
  /**
   * size
   */
  size?: string;
  /**
   * gutter
   */
  gutter?: number;
}

export interface CSSGridProps {
  gutter?: string;
  rowGap?: string;
  min: string;
  max?: string;
  fill?: boolean;
  maxWidth?: string;
}

export const BSGrid = ({ children, gutter }: LayoutProps) => {
  let className = "row";
  if (typeof gutter != "undefined") {
    className += ` g-${gutter}`;
  }
  return <div className={className}>{children}</div>;
};

export const BSCol = ({ children, size = "col" }: LayoutProps) => {
  return <div className={`${size}`}>{children}</div>;
};

export const CSSGrid = styled.div(
  ({ gutter, rowGap, min, max, fill = false, maxWidth }: CSSGridProps) => {
    return `
  display: grid;
	grid-template-columns: repeat(${fill ? "auto-fill" : "auto-fit"}, minmax(${
      min || "1fr"
    }, ${max || "1fr"}));
	grid-gap: ${gutter || "1rem"};
	${rowGap ? "row-gap: " + rowGap : ""};
	${maxWidth ? "max-width: " + maxWidth : ""};
	margin: 0 auto;
  `;
  }
);

export const Container = ({ children }: LayoutProps) => {
  return <div className="container pt-3">{children}</div>;
};
