import { BubbleMenu } from "@tiptap/react/menus";
import styled from "styled-components";
import { FloatingMenuArgs } from "./_types";

import { ReactComponent as BoldIcon } from "../../shared/assets/bold-fill.svg";
import { ReactComponent as CodeIcon } from "../../shared/assets/code-fill.svg";
import { ReactComponent as H1Icon } from "../../shared/assets/h1-fill.svg";
import { ReactComponent as H2Icon } from "../../shared/assets/h2-fill.svg";
import { ReactComponent as H3Icon } from "../../shared/assets/h3-fill.svg"; // IGNORE
import { ReactComponent as ItalicIcon } from "../../shared/assets/italic-fill.svg";
import { ReactComponent as QuoteIcon } from "../../shared/assets/quote-fill.svg";

import { Button } from "../button/Button";
import { Card } from "../card/Card";

const StyledIconButton = styled(Button)<{
  size?: "small" | "medium" | "large";
}>``;

const MenuContainer = styled(Card)`
  border: none;
  .aq-card-body {
    display: flex;
    gap: ${({ theme }) => theme.grid.sizes[1]};
  }

  ${StyledIconButton} {
    :first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    :last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    :not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  }
`;

export const FloatingMenu = (props: FloatingMenuArgs) => {
  const { editor } = props;

  if (!editor) {
    return null;
  }

  return (
    <div>
      <BubbleMenu {...props} editor={editor}>
        <MenuContainer>
          <StyledIconButton
            size={"small"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            flat
          >
            <H1Icon key="ug-h1-button-bubble-menu" />
          </StyledIconButton>
          <StyledIconButton
            size={"small"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            flat
          >
            <H2Icon key="ug-h2-button-bubble-menu" />
          </StyledIconButton>
          <StyledIconButton
            size={"small"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            flat
          >
            <H3Icon key="ug-h3-button-bubble-menu" />
          </StyledIconButton>

          <StyledIconButton
            size={"small"}
            onClick={() => editor.chain().focus().toggleBold().run()}
            flat
          >
            <BoldIcon key="ug-bold-button-bubble-menu" />
          </StyledIconButton>
          <StyledIconButton
            size={"small"}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            flat
          >
            <ItalicIcon key="ug-italic-button-bubble-menu" />
          </StyledIconButton>
          <StyledIconButton
            size={"small"}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            flat
          >
            <QuoteIcon key="ug-quote-button-bubble-menu" />
          </StyledIconButton>
          <StyledIconButton
            size={"small"}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            flat
          >
            <CodeIcon width="16" height="16" key="ug-code-button-bubble-menu" />
          </StyledIconButton>
        </MenuContainer>
      </BubbleMenu>
    </div>
  );
};
