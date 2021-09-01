import { Story, Meta } from "@storybook/react";
import { Carousel, CarouselNav } from "./Carousel";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselProps } from "./_types";
import { useState } from "react";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <Carousel {...args} current={current} setCurrent={setCurrent}>
        <CarouselSlide>
          <div
            style={{ padding: "25px", height: "100px", border: "1px solid" }}
          >
            Slide 1
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div
            style={{ padding: "25px", height: "100px", border: "1px solid" }}
          >
            Slide 2
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div
            style={{ padding: "25px", height: "100px", border: "1px solid" }}
          >
            Slide 3
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div
            style={{ padding: "25px", height: "100px", border: "1px solid" }}
          >
            Slide 4
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div
            style={{ padding: "25px", height: "100px", border: "1px solid" }}
          >
            Slide 5
          </div>
        </CarouselSlide>
        <CarouselSlide>
          <div
            style={{ padding: "25px", height: "100px", border: "1px solid" }}
          >
            Slide 6
          </div>
        </CarouselSlide>
      </Carousel>
      <div>
        <CarouselNav
          showArrows
          {...args}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
};

export const BasicCarousel = Template.bind({});
BasicCarousel.args = {
  totalSlides: 6,
};

export const CarouselWithoutPeekNext = Template.bind({});
CarouselWithoutPeekNext.args = {
  peekNext: false,
  totalSlides: 6,
};

export const CarouselWithStep = Template.bind({});
CarouselWithStep.args = {
  step: 3,
  totalSlides: 6,
};

export const CarouselWithResponsiveSteps = Template.bind({});
CarouselWithResponsiveSteps.args = {
  step: {
    lg: 4,
    xs: 1,
  },
  totalSlides: 6,
};
