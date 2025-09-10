import styled from "styled-components";
import { Text } from "../typography/Typography";
import { EditorHeaderArgs } from "./_types";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.grid.sizes[1]}
    ${({ theme }) => theme.grid.sizes[2]};
`;

const Title = styled(Text)<EditorHeaderArgs>``;

export const EditorHeader = (props: EditorHeaderArgs) => {
  const { title, validation } = props;
  return (
    <Header>
      <Title validation={validation}>{title || "Write"}</Title>
    </Header>
  );
};
