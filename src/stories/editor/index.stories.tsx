import { Meta as ComponentMeta, StoryFn as Story } from "@storybook/react";
import { Editor as TipTapEditor } from "@tiptap/react";
import { Editor } from ".";
import { EditorArgs } from "./_types";
interface EditorStoryArgs extends EditorArgs {
  children?: any;
}

const Template: Story<EditorStoryArgs> = ({ children, ...args }) => {
  return <Editor {...args}>{children}</Editor>;
};

const defaultArgs: EditorStoryArgs = {
  children:
    "<p>I'm <em>a</em> <strong>stupid</strong> <code>editor</code>!</p>",
  onSave: (editor: TipTapEditor) => {},
  onUpdate: ({ editor }) => {},
};

export const Default = Template.bind({});
Default.args = defaultArgs;

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/JF7Zu04vp7pJu9Anoen5ww/UNGUESS-%7C-Express-Bug-Hunting?node-id=2%3A4847",
  },
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...defaultArgs,
  children: `<h3>Embrace Markdown</h3>
  <p>
    Markdown shortcuts make it easy to format the text while typing.
  </p>
  <p>
    To test that, start a new line and type <code>#</code> followed by a space to get a heading. Try <code>#</code>, <code>##</code>, <code>###</code>, <code>####</code>, <code>#####</code>, <code>######</code> for different levels.
  </p>
  <h3>Smart Editor</h3>
  <p>
   Try <code>></code> for blockquotes, <code>*</code>, <code>-</code> or <code>+</code> for bullet lists, or <code>\`foobar\`</code> to highlight code or <code>~~tildes~~</code> to strike text.
  </p>
  <p>
    Try typing <code>(c)</code> to see how it’s converted to a proper © character. You can also try <code>-></code>, <code>>></code>, <code>1/2</code>, <code>!=</code>, or <code>--</code>.
  </p>`,
  placeholderOptions: {
    placeholder: ({ node }) => {
      if (node.type.name === "heading") {
        return "What do you want to do?";
      }

      return "Can you add some further context?";
    },
  },
};

export const BubbleMenu = Template.bind({});
BubbleMenu.args = {
  ...defaultArgs,
  children: `<p>Hey, try to select some text here. There will popup a menu for selecting some inline styles.<br><strong>Remember:</strong> you have full control about content and styling of this menu.</p>`,
  hasInlineMenu: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...defaultArgs,
  children: `<p>Hey, try to select some text here. There will popup a menu for selecting some inline styles.<br><strong>Remember:</strong> you have full control about content and styling of this menu.</p>`,
  editable: false,
};

export const Validation = Template.bind({});
Validation.args = {
  ...defaultArgs,
  children: `<p>Hey, try to change the validation here. Our editor will change the theme color accordingly.</p>`,
  validation: "error",
};

export const NoSaveShortcut = Template.bind({});
NoSaveShortcut.args = {
  ...defaultArgs,
  children: `<p>Hey, try to change the validation here. Our editor will change the theme color accordingly.</p>`,
  disableSaveShortcut: true,
};

export default {
  title: "Organisms/Editor",
  component: Editor,
  argTypes: {
    children: {
      name: "Editor text",
      description: "The initial HTML content of the editor",
      control: "text",
    },
  },
  parameters: {
    // Sets a delay for the component's stories
    chromatic: { delay: 300 },
  },
} as ComponentMeta<typeof Editor>;
