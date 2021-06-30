import styled from "styled-components";
import { BasicModal } from "./_component";

export const Modal = styled(BasicModal)`
  .modal-overlay {
    z-index: 1098;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  .modal-header {
    padding: ${(props) => props.theme.grid.spacing.default};
    display: grid;
    grid-template-columns: 1fr 24px;
    border-bottom: 1px solid ${(props) => props.theme.colors.disabled};
  }
  .modal-title {
    font-size: 16px;
    line-height: 150%;
    font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  }
  .modal-close {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .modal-body {
    padding: ${(props) => props.theme.grid.spacing.default};
  }
  .modal-footer {
    border-top: 1px solid ${(props) => props.theme.colors.disabled};
    padding: ${(props) => props.theme.grid.spacing.default};
  }
`;
