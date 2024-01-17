import { XCircleFill } from "react-bootstrap-icons";
import styled, { DefaultTheme } from "styled-components";

import { BaseProps } from "../../shared/_types";
import { ReactComponent as Danger } from "./assets/danger.svg";
import { ReactComponent as Info } from "./assets/info.svg";
import { ReactComponent as Success } from "./assets/success.svg";
import { ReactComponent as Warining } from "./assets/warning.svg";
import { Button } from "../button/Button";

export interface ToastrProps extends BaseProps {
  type: keyof DefaultTheme["palette"];
  onClose?: () => void;
  a11y?: {
    closeLabel?: string;
    dangerLabel?: string;
    infoLabel?: string;
    successLabel?: string;
    warningLabel?: string;
  };
}

interface ToastrStyleProps {
  theme: DefaultTheme;
  type: ToastrProps["type"];
}

const BasicToastr = ({
  type,
  className,
  onClose,
  children,
  a11y,
}: ToastrProps) => {
  const getIcon = () => {
    switch (type) {
      case "danger":
        return (
          <>
            <Danger aria-hidden="true" className="toastr-tryber" />
            {a11y?.dangerLabel && (
              <span id="a11y-dialog-type" className="sr-only">
                {a11y.dangerLabel}
              </span>
            )}
          </>
        );
      case "info":
        return (
          <>
            <Info aria-hidden="true" className="toastr-tryber" />
            {a11y?.infoLabel && (
              <span id="a11y-dialog-type" className="sr-only">
                {a11y.infoLabel}
              </span>
            )}
          </>
        );
      case "success":
        return (
          <>
            <Success aria-hidden="true" className="toastr-tryber" />
            {a11y?.successLabel && (
              <span id="a11y-dialog-type" className="sr-only">
                {a11y.successLabel}
              </span>
            )}
          </>
        );
      case "warning":
        return (
          <>
            <Warining aria-hidden="true" className="toastr-tryber" />
            {a11y?.warningLabel && (
              <span id="a11y-dialog-type" className="sr-only">
                {a11y.warningLabel}
              </span>
            )}
          </>
        );
      default:
        return (
          <>
            <Info aria-hidden="true" className="toastr-tryber" />
            {a11y?.infoLabel && (
              <span id="a11y-dialog-type" className="sr-only">
                {a11y.infoLabel}
              </span>
            )}
          </>
        );
    }
  };
  return (
    <div
      role="dialog"
      className={`toastr-${type} aq-p-3 ${className}`}
      aria-labelledby="a11y-dialog-type"
      aria-describedby="a11y-dialog-message"
    >
      <div className="toastr-icon aq-mr-3">{getIcon()}</div>
      <div className="toastr-message" id="a11y-dialog-message">
        {children}
      </div>
      {onClose && (
        <Button
          flat
          kind="light"
          className="toastr-close aq-ml-3"
          onClick={onClose}
        >
          {a11y?.closeLabel && (
            <span className="sr-only">{a11y.closeLabel}</span>
          )}
          <XCircleFill aria-hidden="true" />
        </Button>
      )}
    </div>
  );
};

export const Toastr = styled(BasicToastr)(({ theme }: ToastrStyleProps) => {
  let styleMap = Object.entries(theme.palette)
    .map(
      ([key, value]) => `
        &.toastr-${key} {
          border: 2px solid ${value};
          .toastr-icon svg, .toastr-close svg {
            fill: ${value};
          };
          svg.toastr-tryber {color: ${value}};        }
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
    
    .toastr-message {
      flex: 1 1 100%;
    }
    .toastr-icon {
      display: none;
      flex: 0 0 42px;
      svg {
        width: 100%;
        height: 100%;
      }
      @media (min-width: ${theme.grid.breakpoints.md}) {
        display: block;
      }
    }
    .toastr-close {
      padding: 0;
      flex: 0 0 21px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
    ${styleMap}
`;
});
