import { ReactNode } from "react";
import styled from "styled-components";
import { BaseProps } from "../../shared/_types";

export interface LayoutProps extends BaseProps {
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
  fill?: string;
  maxWidth?: string;
}

export const BSGrid = ({ children, gutter, className = "" }: LayoutProps) => {
  className += " row";
  if (typeof gutter != "undefined") {
    className += ` g-${gutter}`;
  }
  return <div className={className}>{children}</div>;
};

export const BSCol = ({
  children,
  size = "col",
  className = "",
}: LayoutProps) => {
  className += ` ${size}`;
  return <div className={className}>{children}</div>;
};

export const CSSGrid = styled.div(
  ({ gutter, rowGap, min, max, fill = "false", maxWidth }: CSSGridProps) => {
    return `
  display: grid;
	grid-template-columns: repeat(${
    fill === "true" ? "auto-fill" : "auto-fit"
  }, minmax(${min || "1fr"}, ${max || "1fr"}));
	grid-gap: ${gutter || "1rem"};
	${rowGap ? "row-gap: " + rowGap : ""};
	${maxWidth ? "max-width: " + maxWidth : ""};
	margin: 0 auto;
  `;
  }
);

interface ContainerProps extends LayoutProps {
  className?: string;
  isFluid?: boolean;
}
export const Container = ({ children, className, isFluid }: ContainerProps) => {
  return (
    <div
      className={`container${isFluid ? " container-fluid" : ""} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
