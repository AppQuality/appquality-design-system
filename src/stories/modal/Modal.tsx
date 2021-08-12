import styled from "styled-components";
import { ModalProps } from "./_types";
import { ModalOverlay } from "./ModalOverlay";
import React, { useState } from "react";
import { ModalBody, ModalBodyProps } from "./ModalBody";
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
  const shakeTimeout = 400;
  const [current, setCurrent] = useState(0);
  const [shake, setShake] = useState(false);
  const [prevError, setPrevError] = useState(false);
  const [nextError, setNextError] = useState(false);
  if (!isOpen) return null;
  const bodyData: ModalBodyProps[] = [];
  const body = React.Children.toArray(children).filter((child) => {
    if (React.isValidElement(child) && child.type === ModalBody) {
      bodyData.push({
        onPrev: child.props.onPrev ? child.props.onPrev : () => true,
        onNext: child.props.onNext ? child.props.onNext : () => true,
        onShow: child.props.onShow ? child.props.onShow : () => {},
        prevText: child.props.prevText ? child.props.prevText : prevText,
        nextText: child.props.nextText ? child.props.nextText : nextText,
        prevButtonStyle: child.props.prevButtonStyle
          ? child.props.prevButtonStyle
          : "primary",
        nextButtonStyle: child.props.nextButtonStyle
          ? child.props.nextButtonStyle
          : "primary",
      });
      return true;
    }
    return false;
  });
  const nextButtonStyle = "primary";
  const prevButtonStyle = "primary";
  const isMultiple = body.length > 1;
  const onShow = body.length >= 1 ? bodyData[current].onShow : false;
  if (onShow) onShow();
  return (
    <div className={className}>
      <ModalOverlay onClick={onClose} />
      <div className={`modal ${shake ? "shaking" : ""}`}>
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
              <BSCol size="col-lg-6"></BSCol>
              <BSCol size="col-6 col-lg-3">
                <Button
                  size="block"
                  flat
                  type={
                    prevError
                      ? "danger"
                      : bodyData[current].prevButtonStyle
                      ? bodyData[current].prevButtonStyle
                      : prevButtonStyle
                  }
                  disabled={current === 0}
                  onClick={() => {
                    const onPrev = bodyData[current].onPrev;
                    if (onPrev && onPrev()) setCurrent(current - 1);
                    else {
                      setTimeout(() => setPrevError(false), shakeTimeout * 2);
                      setTimeout(() => setShake(false), shakeTimeout);
                      setShake(true);
                      setPrevError(true);
                    }
                  }}
                >
                  {bodyData[current].prevText}
                </Button>
              </BSCol>
              <BSCol size="col-6 col-lg-3">
                <Button
                  size="block"
                  flat
                  type={
                    nextError
                      ? "danger"
                      : bodyData[current].nextButtonStyle
                      ? bodyData[current].nextButtonStyle
                      : nextButtonStyle
                  }
                  onClick={() => {
                    if (current === body.length - 1) {
                      onClose();
                    } else {
                      const onNext = bodyData[current].onNext;
                      if (onNext && onNext()) setCurrent(current + 1);
                      else {
                        setTimeout(() => setNextError(false), shakeTimeout * 2);
                        setTimeout(() => setShake(false), shakeTimeout);
                        setShake(true);
                        setNextError(true);
                      }
                    }
                  }}
                >
                  {bodyData[current].nextText}
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

    &.shaking {
      animation: shake 0.5s;
      animation-iteration-count: infinite;
    }
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

  @keyframes shake {
    0% {
      transform: translate(calc(-50% + 1px), -50%);
    }
    10% {
      transform: translate(calc(-50% - 1px), -50%);
    }
    20% {
      transform: translate(calc(-50% -3px), -50%) rotate(1deg);
    }
    30% {
      transform: translate(calc(-50% + 3px), -50%);
    }
    40% {
      transform: translate(calc(-50% + 1px), -50%);
    }
    50% {
      transform: translate(calc(-50% - 1px), -50%);
    }
    60% {
      transform: translate(calc(-50% - 3px), -50%);
    }
    70% {
      transform: translate(calc(-50% + 3px), -50%);
    }
    80% {
      transform: translate(calc(-50% - 1px), -50%);
    }
    90% {
      transform: translate(calc(-50% + 1px), -50%);
    }
    100% {
      transform: translate(calc(-50% + 1px), -50%);
    }
  }
`;

export { ModalBody };
