import { Accordion } from "./Accordion";
import { AccordionProps } from "./_types";
import { Card } from "../card/Card";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Accordion",
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => {
  const { Item } = Accordion;
  return (
    <Accordion {...args} initialActive="item1">
      <Item disabled id="item1">
        <Item.Head>Item 1</Item.Head>
        <Item.Body className="aq-m-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ipsum,
          nihil! Alias earum eos est fuga, illo libero maxime modi neque nihil
          odio omnis quaerat suscipit tempore ut, vel, voluptate.
        </Item.Body>
      </Item>
      <Item id="item2">
        <Item.Head>Item 2</Item.Head>
        <Item.Body className="aq-m-3">
          Aliquam eu pretium velit. Proin arcu ligula, porta sed elementum id,
          fermentum sit amet ligula. Donec cursus quam velit, nec varius sapien
          faucibus sed. Etiam tincidunt blandit blandit. Mauris a tortor at
          sapien tincidunt facilisis ut aliquam purus. Nam metus arcu, volutpat
          ac venenatis sit amet, feugiat vel nisi. Suspendisse laoreet eleifend
          elit, eu ornare mi aliquet lacinia. Vivamus vitae vehicula diam. In
          dapibus diam id interdum sodales. Donec imperdiet lorem eget augue
          vulputate elementum. Duis consectetur blandit velit, eu bibendum
          ligula tincidunt vel. Vivamus venenatis nisl imperdiet dolor dignissim
          rhoncus. Suspendisse pellentesque scelerisque lorem blandit dignissim.
          Nam a elementum nisl, sit amet semper ipsum.
        </Item.Body>
      </Item>
      <Item id="item3">
        <Item.Head>Item 3</Item.Head>
        <Item.Body className="aq-m-3">
          Nullam eu luctus massa. Maecenas id quam ultrices, tincidunt mi
          rhoncus, maximus orci. Nulla felis massa, aliquam quis mauris
          imperdiet, pretium lobortis eros. Fusce eget commodo elit, vitae
          elementum dui. Ut vulputate porttitor odio vel posuere. Donec nisl mi,
          consequat a placerat ac, tempor blandit orci. Nulla facilisi. Quisque
          vestibulum nunc justo, vel tempus dolor efficitur vestibulum.
          Phasellus eget tortor risus. Sed aliquet ex velit, ac imperdiet est
          consectetur ut.
        </Item.Body>
      </Item>
    </Accordion>
  );
};

export const BasicAccordion = Template.bind({});
BasicAccordion.args = {};
BasicAccordion.parameters = {};

export const AccordionInsideCard = () => {
  const { Item } = Accordion;
  return (
    <Card bodyClass="aq-mb-3">
      <Accordion initialActive="item1">
        <Item id="item1">
          <Item.Head>Item 1</Item.Head>
          <Item.Body className="aq-m-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            ipsum, nihil! Alias earum eos est fuga, illo libero maxime modi
            neque nihil odio omnis quaerat suscipit tempore ut, vel, voluptate.
          </Item.Body>
        </Item>
        <Item id="item2">
          <Item.Head>Item 2</Item.Head>
          <Item.Body className="aq-m-3">
            Aliquam eu pretium velit. Proin arcu ligula, porta sed elementum id,
            fermentum sit amet ligula. Donec cursus quam velit, nec varius
            sapien faucibus sed. Etiam tincidunt blandit blandit. Mauris a
            tortor at sapien tincidunt facilisis ut aliquam purus. Nam metus
            arcu, volutpat ac venenatis sit amet, feugiat vel nisi. Suspendisse
            laoreet eleifend elit, eu ornare mi aliquet lacinia. Vivamus vitae
            vehicula diam. In dapibus diam id interdum sodales. Donec imperdiet
            lorem eget augue vulputate elementum. Duis consectetur blandit
            velit, eu bibendum ligula tincidunt vel. Vivamus venenatis nisl
            imperdiet dolor dignissim rhoncus. Suspendisse pellentesque
            scelerisque lorem blandit dignissim. Nam a elementum nisl, sit amet
            semper ipsum.
          </Item.Body>
        </Item>
        <Item id="item3">
          <Item.Head>Item 3</Item.Head>
          <Item.Body className="aq-m-3">
            Nullam eu luctus massa. Maecenas id quam ultrices, tincidunt mi
            rhoncus, maximus orci. Nulla felis massa, aliquam quis mauris
            imperdiet, pretium lobortis eros. Fusce eget commodo elit, vitae
            elementum dui. Ut vulputate porttitor odio vel posuere. Donec nisl
            mi, consequat a placerat ac, tempor blandit orci. Nulla facilisi.
            Quisque vestibulum nunc justo, vel tempus dolor efficitur
            vestibulum. Phasellus eget tortor risus. Sed aliquet ex velit, ac
            imperdiet est consectetur ut.
          </Item.Body>
        </Item>
      </Accordion>
    </Card>
  );
};
