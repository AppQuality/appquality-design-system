import { Meta, Story } from "@storybook/react";
import { FileInfoCard } from "./FileInfoCard";
import { FileInfoCardProps } from "./_types";

export default {
  title: "File info card",
  component: FileInfoCard,
} as Meta;

const Template: Story<FileInfoCardProps> = (args) => {
  return <FileInfoCard {...args} />;
};

export const FileInfo = Template.bind({});
FileInfo.args = {
  fileInfo: "Name.jpg (70kb)",
  status: "success",
  onDelete: () => console.info("delete"),
};
