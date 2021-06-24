import { Story, Meta } from "@storybook/react";
import { Paragraph, ParagraphProps, Title } from "./Typography";

export default {
  title: "Typography",
  component: Paragraph,
} as Meta;

const ParagraphTemplate: Story<ParagraphProps> = (args) => {
  return <Paragraph {...args}>Lorem ipsum dolor sit amet </Paragraph>;
};

export const SimpleParagraph = ParagraphTemplate.bind({});
SimpleParagraph.args = {};

export const SmallParagraph = ParagraphTemplate.bind({});
SmallParagraph.args = {
  small: true,
};

export const TitleExtraLarge = () => (
  <Title size="xl">Lorem ipsum dolor sit amet</Title>
);
export const TitleLarge = () => (
  <Title size="l">Lorem ipsum dolor sit amet</Title>
);
export const TitleMid = () => (
  <Title size="m">Lorem ipsum dolor sit amet</Title>
);
export const TitleMidSmall = () => (
  <Title size="ms">Lorem ipsum dolor sit amet</Title>
);
export const TitleSmall = () => (
  <Title size="s">Lorem ipsum dolor sit amet</Title>
);
export const TitleExtraSmall = () => (
  <Title size="xs">Lorem ipsum dolor sit amet</Title>
);
