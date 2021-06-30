import { Story, Meta } from "@storybook/react";
import { ModalProps } from "./_types";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>This is a modal content</Modal>
);

export const SimpleModal = Template.bind({});
SimpleModal.args = {
  isOpen: true,
  title: "Modal Basic",
};

export const SimpleModalLarge = Template.bind({});
SimpleModalLarge.args = {
  isOpen: true,
  size: "large",
  title: "Modal Basic",
};

export const SimpleModalSmall = Template.bind({});
SimpleModalSmall.args = {
  isOpen: true,
  size: "small",
  title: "Modal Basic",
};

export const ModalNoHeader = Template.bind({});
ModalNoHeader.args = {
  isOpen: true,
};

export const ModalWithFooter = Template.bind({});
ModalWithFooter.args = {
  isOpen: true,
  footer: <div>Hello i'm a footer</div>,
};
