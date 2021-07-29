import { Story, Meta } from "@storybook/react";
import { Card } from "../card/Card";
import { Carousel } from "./Carousel";
import { CarouselProps } from "./_types";
import { items } from "./_data";
import { Text } from "../typography/Typography";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => {
  let bgColor = args.dark ? "#8EA2AE" : "#F0F5F7";
  return (
    <div style={{ backgroundColor: bgColor, padding: "30px 0 50px" }}>
      <Carousel {...args}>
        {items.map((item, index) => (
          <Card shadow className="card-list-item aq-my-3" key={index}>
            <div className="item-avatar aq-mb-2">
              <Text color="primary" className="capitalize-first avatar-name">
                <strong>
                  {item.name}, {item.age}
                </strong>
              </Text>
              <Text
                color="secondary"
                className="capitalize-first avatar-qualification"
              >
                {item.qualification}
              </Text>
            </div>
            <Text color="secondary">{item.review}</Text>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export const BasicCarousel = Template.bind({});
BasicCarousel.args = {};
BasicCarousel.parameters = {};

export const DarkCarousel = Template.bind({});
DarkCarousel.args = { dark: true };
DarkCarousel.parameters = {};
