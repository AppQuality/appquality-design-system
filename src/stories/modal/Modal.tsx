import styled from "styled-components";
import { ModalProps } from "./_types";
import { ModalOverlay } from "./ModalOverlay";
import React, { useState } from "react";
import { ModalBody } from "./ModalBody";
import { ModalHeader } from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";
import { Button } from "../button/Button";
import { BSGrid, BSCol } from "../layout/Layout";

const BasicModal = ({
  isOpen,
  onClose,
  title,
  footer,
  size = "mid",
  children,
  className,
  prevText = "Previous",
  nextText = "Next",
}: ModalProps) => {
  const [current, setCurrent] = useState(0);
  if (!isOpen) return null;
  const body = React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child) && child.type === ModalBody;
  });
  const isMultiple = body.length > 1;
  return (
    <div className={className}>
      <ModalOverlay onClick={onClose} />
      <div className="modal">
        {title ? <ModalHeader title={title} onClose={onClose} /> : null}
        {body.length > 1 ? (
          body[current]
        ) : body.length === 0 ? (
          <ModalBody>{children}</ModalBody>
        ) : (
          body
        )}
        {isMultiple ? (
          <ModalFooter>
            <BSGrid>
              <BSCol size="col-6"></BSCol>
              <BSCol size="col-3">
                <Button
                  size="block"
                  flat
                  disabled={current === 0}
                  onClick={() => setCurrent(current - 1)}
                >
                  {prevText}
                </Button>
              </BSCol>
              <BSCol size="col-3">
                <Button
                  size="block"
                  flat
                  disabled={current === body.length - 1}
                  onClick={() => setCurrent(current + 1)}
                >
                  {nextText}
                </Button>
              </BSCol>
            </BSGrid>
          </ModalFooter>
        ) : footer ? (
          <ModalFooter>{footer}</ModalFooter>
        ) : null}
      </div>
    </div>
  );
};

export const Modal = styled(BasicModal)`
  .modal {
    z-index: 1099;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${(props) => props.theme.general.borderRadius};
    width: calc(100vw - 24px);
    max-width: 100%;
    max-height: 100%;
    background-color: ${(props) => props.theme.colors.white};

    @media (min-width: ${(props) => props.theme.grid.breakpoints.md}) {
      width: ${(props) => {
        switch (props.size) {
          case "large":
            return "800px";
          case "small":
            return "300px";
          default:
            return "600px";
        }
      }};
    }
  }
`;

export { ModalBody };
