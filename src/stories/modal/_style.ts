import * as React from "react";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 1098;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    z-index: 1099;
    width: 400px;
    max-width: 100%;
    height: 300px;
    max-height: 100%;
    background-color: ${(props) => props.theme.colors.white};
  }
  .modal-header {
    display: grid;
    grid-template-columns: 1fr 24px;
  }
  .modal-title {
    font-size: 16px;
    line-height: 150%;
    font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  }
  .modal-close {
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .modal-body {
    padding: 16px;
  }
  .modal-footer {
  }
`;
