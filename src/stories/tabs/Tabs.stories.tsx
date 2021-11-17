import { useState } from "react";
import { Tabs, Tab, TabsProps } from "./Tabs";
import { Card } from "../card/Card";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Tabs",
  component: Tabs,
} as Meta;

const Tab1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="aq-m-3">
      {count}: Lorem ipsum dolor sit amet{" "}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
const Template: Story<TabsProps> = (args) => {
  return (
    <Tabs {...args} active="tab1">
      <Tab id="tab1" title="Tab 1">
        <Tab1 />
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

export const TabsSelectFromOutside = () => {
  const [active, setActive] = useState("tab1");
  return (
    <Card bodyClass="aq-mb-3">
      <select onChange={(e) => setActive(e.target.value)}>
        <option value="tab1">Tab 1</option>
        <option value="tab2">Tab 2</option>
      </select>
      <Tabs active={active} setActive={setActive}>
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
};

export const MobileScrollTabs = () => (
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
      <Tab id="tab4" title="Tab 4">
        <div className="aq-m-4">
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </Tab>
      <Tab id="tab5" title="Tab 5">
        <div className="aq-m-5">
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </Tab>
    </Tabs>
  </Card>
);
