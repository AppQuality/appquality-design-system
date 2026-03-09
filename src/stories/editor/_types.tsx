import { PlaceholderOptions } from "@tiptap/extension-placeholder";
import { Editor, EditorOptions } from "@tiptap/react";
import { FloatingMenuProps } from "@tiptap/react/menus";

type validationStatus = "success" | "warning" | "error";

export interface EditorArgs extends Partial<EditorOptions> {
  placeholderOptions?: Partial<PlaceholderOptions>;
  hasInlineMenu?: boolean;
  bubbleOptions?: any;
  headerTitle?: string;
  footerSaveText?: string;
  /** Applies validation state styling */
  validation?: validationStatus;
  onSave?: (editor: Editor) => void;
  disableSaveShortcut?: boolean;
}

export interface EditorHeaderArgs {
  title?: string;
  validation?: validationStatus;
}

export interface FloatingMenuArgs extends Partial<FloatingMenuProps> {}
