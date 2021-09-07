import styled, { DefaultTheme } from "styled-components";
import { BaseProps } from "../../shared/_types";
import {
  CheckCircleFill,
  EmojiFrownFill,
  ExclamationTriangleFill,
  InfoCircleFill,
  XCircleFill,
} from "react-bootstrap-icons";

export interface ToastrProps extends BaseProps {
  type: "success" | "info" | "warning" | "danger";
  onClose?: () => void;
}

interface ToastrStyleProps {
  theme: DefaultTheme;
  type: ToastrProps["type"];
}

const BasicToastr = ({ type, className, onClose, children }: ToastrProps) => {
  const getIcon = () => {
    switch (type) {
      case "danger":
        return <EmojiFrownFill />;
      case "info":
        return <InfoCircleFill />;
      case "success":
        return <CheckCircleFill />;
      case "warning":
        return <ExclamationTriangleFill />;
    }
  };
  return (
    <div className={`toastr-${type} aq-p-3 ${className}`}>
      <div className="toastr-icon aq-mr-3">{getIcon()}</div>
      <div className="toastr-message">{children}</div>
      {onClose && (
        <div className="toastr-close aq-ml-3" onClick={onClose}>
          <XCircleFill />
        </div>
      )}
    </div>
  );
};

export const Toastr = styled(BasicToastr)(({ theme }: ToastrStyleProps) => {
  const styleMap = Object.entries(theme.palette)
    .map(
      ([key, value]) => `
        &.toastr-${key} {
          border: 2px solid ${value};
          
          .toastr-icon svg, .toastr-close svg {
            fill: ${value} 
          }
        }
      `
    )
    .join(" ");

  return `
    border-radius: ${theme.general.borderRadius};
    max-width: 100%;
    background-color: ${theme.colors.white};
    display: flex;
    align-items: flex-start;
    box-shadow: 0 0 10px rgb(0 0 0 / 25%);
    @media (min-width: ${theme.grid.breakpoints.md}) {
    
    }
    .toastr-icon {
      flex: 0 0 42px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .toastr-close {
      cursor: pointer;
      flex: 0 0 21px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    ${styleMap}
`;
});
