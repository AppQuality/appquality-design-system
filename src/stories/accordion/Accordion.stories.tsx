import { Meta, StoryFn } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionProps } from "./_types";

export default {
  title: "Accordion",
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => {
  return (
    <Accordion {...args} initialActive="item1">
      <Accordion.Item id="item1" title={<h4>Item 1 title is an h4</h4>}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum,
          nihil! Alias earum eos est fuga, illo libero maxime modi neque nihil
          odio omnis quaerat suscipit tempore ut, vel, voluptate.
        </div>
      </Accordion.Item>
      <Accordion.Item id="item2" title="Item 2">
        Aliquam eu pretium velit. Proin arcu ligula, porta sed elementum id,
        fermentum sit amet ligula. Donec cursus quam velit, nec varius sapien
        faucibus sed. Etiam tincidunt blandit blandit. Mauris a tortor at sapien
        tincidunt facilisis ut aliquam purus. Nam metus arcu, volutpat ac
        venenatis sit amet, feugiat vel nisi. Suspendisse laoreet eleifend elit,
        eu ornare mi aliquet lacinia. Vivamus vitae vehicula diam. In dapibus
        diam id interdum sodales. Donec imperdiet lorem eget augue vulputate
        elementum. Duis consectetur blandit velit, eu bibendum ligula tincidunt
        vel. Vivamus venenatis nisl imperdiet dolor dignissim rhoncus.
        Suspendisse pellentesque scelerisque lorem blandit dignissim. Nam a
        elementum nisl, sit amet semper ipsum.
      </Accordion.Item>
      <Accordion.Item disabled id="item3" title="Item 3 (disabled)">
        <div>
          Nullam eu luctus massa. Maecenas id quam ultrices, tincidunt mi
          rhoncus, maximus orci. Nulla felis massa, aliquam quis mauris
          imperdiet, pretium lobortis eros. Fusce eget commodo elit, vitae
          elementum dui. Ut vulputate porttitor odio vel posuere. Donec nisl mi,
          consequat a placerat ac, tempor blandit orci. Nulla facilisi. Quisque
          vestibulum nunc justo, vel tempus dolor efficitur vestibulum.
          Phasellus eget tortor risus. Sed aliquet ex velit, ac imperdiet est
          consectetur ut.
        </div>
      </Accordion.Item>
      <Accordion.Item id="item4" title="Item 4">
        <div>
          Nullam eu luctus massa. Maecenas id quam ultrices, tincidunt mi
          rhoncus, maximus orci. Nulla felis massa, aliquam quis mauris
          imperdiet, pretium lobortis eros. Fusce eget commodo elit, vitae
          elementum dui. Ut vulputate porttitor odio vel posuere. Donec nisl mi,
          consequat a placerat ac, tempor blandit orci. Nulla facilisi. Quisque
          vestibulum nunc justo, vel tempus dolor efficitur vestibulum.
          Phasellus eget tortor risus. Sed aliquet ex velit, ac imperdiet est
          consectetur ut.
        </div>
      </Accordion.Item>
    </Accordion>
  );
};

export const BasicAccordion = Template.bind({});
BasicAccordion.args = {};
BasicAccordion.parameters = {};
