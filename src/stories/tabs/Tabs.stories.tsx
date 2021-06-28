import { Tabs, Tab, TabsProps } from "./Tabs";
import { Card } from "../card/Card";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Tabs",
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => {
  return (
    <Tabs {...args} active="tab1">
      <Tab id="tab1" title="Tab 1">
        <div className="aq-m-3">Lorem ipsum dolor sit amet</div>
      </Tab>
      <Tab id="tab2" title="Tab 2">
        <div className="aq-m-3">numquam concupescendit elit</div>
      </Tab>
      <Tab id="tab3" title="Tab 3" disabled>
        <div className="aq-m-3">
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </Tab>
    </Tabs>
  );
};

export const BasicTabs = Template.bind({});
BasicTabs.args = {};
BasicTabs.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/G3V1VENAN7iLSB4PtHmWr8/Storybook-reference?node-id=74%3A136",
  },
};

export const TabsInsideCard = () => (
  <Card bodyClass="aq-mb-3">
    <Tabs active="tab1">
      <Tab id="tab1" title="Tab 1">
        <div className="aq-m-3">Lorem ipsum dolor sit amet</div>
      </Tab>
      <Tab id="tab2" title="Tab 2">
        <div className="aq-m-3">numquam concupescendit elit</div>
      </Tab>
      <Tab id="tab3" title="Tab 3" disabled>
        <div className="aq-m-3">
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </Tab>
    </Tabs>
  </Card>
);
