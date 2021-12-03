import styled from "styled-components";

export const ModalFooter = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.elementGeneric};
  padding: ${(props) => props.theme.grid.spacing.default};
`;
