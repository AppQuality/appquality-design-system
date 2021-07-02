import styled from "styled-components";
import { BasicPill } from "./_component";

export const Pill = styled(BasicPill)`
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.palette[props.type]};
  ${(props) =>
    props.flat
      ? `
	color: ${props.theme.palette[props.type]};
	`
      : `
	color:  ${props.theme.colors.white};
	background-color: ${props.theme.palette[props.type]};
	`}
`;
