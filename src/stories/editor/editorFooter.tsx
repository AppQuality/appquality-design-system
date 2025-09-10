import styled from "styled-components";
import { isMac } from "../../shared/utils/isMac";
import { Pill } from "../pill/Pill";
import { Text } from "../typography/Typography";

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.grid.sizes[2]} 16px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const EditorFooter = ({ saveText }: { saveText?: string }) => {
  return (
    <Footer>
      <Pill type="primary">{isMac() ? "Cmd" : "Ctrl"}+enter</Pill>&nbsp;
      <Text>{saveText || "to save"}</Text>
    </Footer>
  );
};
