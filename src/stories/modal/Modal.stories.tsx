import { Story, Meta } from "@storybook/react";
import { ModalProps } from "./_types";
import { Modal, ModalBody } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <div>This is a modal content</div>
  </Modal>
);
const TemplateMulti: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalBody>This is the first modal content</ModalBody>
    <ModalBody>This is the second modal content</ModalBody>
  </Modal>
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

export const ModalWithMultipleBodies = TemplateMulti.bind({});
ModalWithMultipleBodies.args = {
  isOpen: true,
};

const TemplateMultiValidate: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalBody nextButtonStyle="warning">
      This is the first modal content
    </ModalBody>
    <ModalBody
      onShow={() => alert("I'm showing the second modal body")}
      nextText="Error here"
      onNext={() => false}
    >
      This is the second modal content
    </ModalBody>
    <ModalBody>
      This is the third modal content (but you won't see this)
    </ModalBody>
  </Modal>
);

export const ModalWithMultipleBodiesAndValidation = TemplateMultiValidate.bind(
  {}
);
ModalWithMultipleBodiesAndValidation.args = {
  isOpen: true,
};
