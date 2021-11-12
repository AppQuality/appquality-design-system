import styled, { css } from "styled-components";

export const InvalidInputStyle = css`
  border-color: ${(props) => props.theme.palette.danger};
`;
export const InvalidFocusStyle = css`
  border-color: ${(props) => props.theme.palette.danger};
  box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.red100};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${(props) => props.theme.grid.sizes[3]}; ;
`;
