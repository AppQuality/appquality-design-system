import { Meta, StoryFn } from "@storybook/react";
import { PageTitle } from "./PageTitle";
import { PageTitleProps } from "./_types";

export default {
  title: "Page Title",
  component: PageTitle,
} as Meta;

const Template: StoryFn<PageTitleProps> = (args) => (
  <PageTitle {...args}>Header</PageTitle>
);

export const BasicPageTitle = Template.bind({});
BasicPageTitle.args = {
  size: "regular",
};

export const PageTitleWithSubtitle = Template.bind({});
PageTitleWithSubtitle.args = {
  size: "regular",
  subtitle: "Subtitle",
};

export const PageTitleSmallWithSubtitle = Template.bind({});
PageTitleSmallWithSubtitle.args = {
  size: "small",
  subtitle: "Subtitle",
};

export const PageTitleWithSubtitleAndHeading = Template.bind({});
PageTitleWithSubtitleAndHeading.args = {
  size: "regular",
  subtitle: "Subtitle",
  heading: "Heading",
};

export const PageTitleWithSubtitleAndHeadingAndNavigation = Template.bind({});
PageTitleWithSubtitleAndHeadingAndNavigation.args = {
  size: "regular",
  subtitle: "Subtitle",
  heading: "Heading",
  back: {
    text: "Back",
    navigation: "#",
  },
};
export const PageTitleWithHeading = Template.bind({});
PageTitleWithHeading.args = {
  size: "regular",
  heading: "Heading",
};

export const PageTitleFullWithSemanticTags = Template.bind({});
PageTitleFullWithSemanticTags.args = {
  size: "regular",
  as: "h1",
  subtitle: { as: "h2", content: "Subtitle" },
  heading: { as: "h3", content: "Heading" },
  back: {
    text: "Back",
    navigation: "#",
  },
};
export const BigBasicPageTitle = Template.bind({});
BigBasicPageTitle.args = {
  size: "big",
};

export const BigPageTitleWithSubtitle = Template.bind({});
BigPageTitleWithSubtitle.args = {
  size: "big",
  subtitle: "Subtitle",
};
