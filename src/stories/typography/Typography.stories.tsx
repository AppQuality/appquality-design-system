import { Story, Meta } from "@storybook/react";
import { Paragraph, ParagraphProps } from "./Typography";

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

export const TitleExtraLarge = () => <h1>Lorem ipsum dolor sit amet</h1>;
export const TitleLarge = () => <h2>Lorem ipsum dolor sit amet</h2>;
export const TitleMid = () => <h3>Lorem ipsum dolor sit amet</h3>;
export const TitleMidSmall = () => <h4>Lorem ipsum dolor sit amet</h4>;
export const TitleSmall = () => <h5>Lorem ipsum dolor sit amet</h5>;
export const TitleExtraSmall = () => <h6>Lorem ipsum dolor sit amet</h6>;
