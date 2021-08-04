import { Story, Meta } from "@storybook/react";
import { Carousel } from "./Carousel";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselProps } from "./_types";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => (
  <Carousel {...args}>
    <CarouselSlide>Slide 1</CarouselSlide>
    <CarouselSlide>Slide 2</CarouselSlide>
    <CarouselSlide>Slide 3</CarouselSlide>
    <CarouselSlide>Slide 4</CarouselSlide>
    <CarouselSlide>Slide 5</CarouselSlide>
    <CarouselSlide>Slide 6</CarouselSlide>
  </Carousel>
);

export const BasicCarousel = Template.bind({});
BasicCarousel.args = {};

export const CarouselWithStep = Template.bind({});
CarouselWithStep.args = {
  step: 3,
};

export const CarouselWithResponsiveSteps = Template.bind({});
CarouselWithResponsiveSteps.args = {
  step: {
    lg: 4,
    xs: 1,
  },
};
