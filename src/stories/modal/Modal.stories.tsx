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
