import { Story, Meta } from "@storybook/react";
import { Paragraph } from "./Typography.tsx";

export default {
  title: "Typography",
  component: Paragraph,
} as Meta;

const ParagraphTemplate: Story<SelectProps> = (args) => {
  return <Paragraph {...args}>Lorem ipsum dolor sit amet </Paragraph>;
};

export const SimpleParagraph = ParagraphTemplate.bind({});
SimpleParagraph.args = {};

export const SmallParagraph = ParagraphTemplate.bind({});
SmallParagraph.args = {
  small: true,
};

const TitleTemplate: Story<SelectProps> = (args) => {
  let Component = args.component;
  return <Component {...args}>Lorem ipsum dolor sit amet </Component>;
};

export const TitleExtraLarge = TitleTemplate.bind({});
TitleExtraLarge.args = {
  component: "h1",
};
export const TitleLarge = TitleTemplate.bind({});
TitleLarge.args = {
  component: "h2",
};
export const TitleMid = TitleTemplate.bind({});
TitleMid.args = {
  component: "h3",
};
export const TitleMidSmall = TitleTemplate.bind({});
TitleMidSmall.args = {
  component: "h4",
};
export const TitleSmall = TitleTemplate.bind({});
TitleSmall.args = {
  component: "h5",
};
export const TitleExtraSmall = TitleTemplate.bind({});
TitleExtraSmall.args = {
  component: "h6",
};
