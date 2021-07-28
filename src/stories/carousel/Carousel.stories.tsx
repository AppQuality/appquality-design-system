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
  return (
    <Carousel {...args}>
      {items.map((item, index) => (
        <Card shadow className="card-list-item aq-m-3" key={index}>
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
  );
};

export const BasicCarousel = Template.bind({});
BasicCarousel.args = { navigation: true };
BasicCarousel.parameters = {};
