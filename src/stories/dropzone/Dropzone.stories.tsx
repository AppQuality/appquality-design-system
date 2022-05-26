import { Meta, Story } from "@storybook/react";
import { Dropzone } from "./Dropzone";
import { DropzoneProps } from "./_types";

export default {
  title: "Dropzone",
  component: Dropzone,
} as Meta;

const Template: Story<DropzoneProps> = (args) => {
  return <Dropzone {...args} />;
};

export const BasicDropzone = Template.bind({});
BasicDropzone.args = {
  text: "Clicca qui per caricare i tuoi file oppure trascina!",
  accept: { "image/*": [] },
  maxFiles: 5,
  onUpload: (files) => console.log(files),
  onDelete: (file) => console.log(file),
};
