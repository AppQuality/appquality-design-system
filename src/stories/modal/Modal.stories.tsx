import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { aqBootstrapTheme } from "../theme/defaultTheme";
import { BaseProps } from "../../shared/_types";
import { ModalProps } from "./_types";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps & BaseProps> = (args) => (
  <ThemeProvider theme={aqBootstrapTheme}>
    <Modal {...args}>This is a modal content</Modal>
  </ThemeProvider>
);

export const SimpleModal = Template.bind({});
SimpleModal.args = {
  isOpen: true,
  title: "Modal Basic",
};
