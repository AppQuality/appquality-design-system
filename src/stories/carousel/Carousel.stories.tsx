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
    <CarouselSlide>
      <div style={{ padding: "25px", height: "100px", border: "1px solid" }}>
        Slide 1
      </div>
    </CarouselSlide>
    <CarouselSlide>
      <div style={{ padding: "25px", height: "100px", border: "1px solid" }}>
        Slide 2
      </div>
    </CarouselSlide>
    <CarouselSlide>
      <div style={{ padding: "25px", height: "100px", border: "1px solid" }}>
        Slide 3
      </div>
    </CarouselSlide>
    <CarouselSlide>
      <div style={{ padding: "25px", height: "100px", border: "1px solid" }}>
        Slide 4
      </div>
    </CarouselSlide>
    <CarouselSlide>
      <div style={{ padding: "25px", height: "100px", border: "1px solid" }}>
        Slide 5
      </div>
    </CarouselSlide>
    <CarouselSlide>
      <div style={{ padding: "25px", height: "100px", border: "1px solid" }}>
        Slide 6
      </div>
    </CarouselSlide>
  </Carousel>
);

export const BasicCarousel = Template.bind({});
BasicCarousel.args = {};

export const CarouselWithoutPeekNext = Template.bind({});
CarouselWithoutPeekNext.args = {
  peekNext: false,
};

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
