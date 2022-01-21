import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 1098;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.variants.primary};
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
