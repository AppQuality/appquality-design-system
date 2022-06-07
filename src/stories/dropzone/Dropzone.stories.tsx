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

export const DropzoneArea = Template.bind({});
DropzoneArea.args = {
  description: "Click here to upload your files or drag and drop!",
  accept: ["image/jpeg", "image/png"],
  disabled: false,
  maxFiles: undefined,
  maxFilesText: "You have reached the maximum number of files you can upload",
  onAccepted: (fileList) => console.info("acceptedFiles", fileList),
  onRejected: (fileList) => console.error("fileRejections", fileList),
};
