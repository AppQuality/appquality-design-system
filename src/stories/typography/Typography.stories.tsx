import { Meta, StoryFn } from "@storybook/react";
import { Text, TextProps, Title } from "./Typography";

export default {
  title: "Typography",
  component: Text,
} as Meta;

const ParagraphTemplate: StoryFn<TextProps> = (args) => {
  return <Text {...args}>Lorem ipsum dolor sit amet </Text>;
};

export const SimpleParagraph = ParagraphTemplate.bind({});
SimpleParagraph.args = {};

export const SmallParagraph = ParagraphTemplate.bind({});
SmallParagraph.args = {
  small: true,
};

export const ColoredSmallParagraph = ParagraphTemplate.bind({});
ColoredSmallParagraph.args = {
  color: "danger",
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
