import {
  Content,
  Editor as TipTapEditor,
  EditorContent,
  useEditor,
} from "@tiptap/react";
import styled from "styled-components";

import CharacterCount from "@tiptap/extension-character-count";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";

import Dropcursor from "@tiptap/extension-dropcursor";
import {
  KeyboardEvent as ReactKeyboardEvent,
  PropsWithChildren,
  useState,
} from "react";
import { EditorFooter } from "./editorFooter";
import { EditorHeader } from "./editorHeader";
import { FloatingMenu } from "./floatingMenu";
import { EditorArgs } from "./_types";

const EditorContainer = styled.div<EditorArgs>`
  ${({ editable }) =>
    !editable &&
    `
      border: none;
      outline: none;
      
    `}

  .ProseMirror {
    padding: ${({ theme }) => theme.grid.sizes[2]};
    background-color: #fff;
    min-height: 100px;
    outline: none;

    ${({ editable }) =>
      !editable &&
      `
      background: transparent;
      border: none;
      outline: none;
      padding: 0;
      min-height: 0;
      `}
  }
`;

/**
 * Editor is a wrapper around TipTap/ProseMirror 
 * <br>
 * It's a rich text WYSIWYG editors.
 * <hr>
 * Used for this:
    - To allow text customization with markup supports
    - To develop collaborative text editing
   
   Not for this:
    - Simple text input, use textarea instead.
 */
const Editor = ({
  onSave,
  headerTitle,
  footerSaveText,
  placeholderOptions,
  extensions,
  ...props
}: PropsWithChildren<EditorArgs>) => {
  const {
    children,
    hasInlineMenu,
    bubbleOptions,
    editable,
    disableSaveShortcut,
  } = props;

  const isEditable = editable !== undefined ? editable : true;

  const [activeEditor, setActiveEditor] = useState<TipTapEditor | null>();

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      if (onSave && activeEditor) onSave(activeEditor);
    }
  };

  const ed = useEditor({
    extensions: [
      Typography,
      Link,
      StarterKit,
      Dropcursor,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
        ...placeholderOptions,
      }),
      CharacterCount,
      ...(extensions || []),
    ],
    content: (children as Content) || "",
    editorProps: props.disableSaveShortcut
      ? {}
      : {
          handleKeyDown: (view, event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
              return true;
            }

            return false;
          },
        },
    ...props,
  });

  if (!ed) {
    return null;
  }

  // Add here because we want to keep also the listener from the props.
  ed.on("update", ({ editor }) => setActiveEditor(editor as TipTapEditor));

  return (
    <EditorContainer editable={isEditable} validation={props.validation}>
      {isEditable && (
        <>
          <EditorHeader title={headerTitle} validation={props.validation} />
          {hasInlineMenu && (
            <FloatingMenu editor={ed} tippyOptions={{ ...bubbleOptions }} />
          )}
        </>
      )}
      <EditorContent editor={ed} onKeyDown={onKeyDown} />
      {!disableSaveShortcut && isEditable && (
        <EditorFooter saveText={footerSaveText} />
      )}
    </EditorContainer>
  );
};

export { Editor };
