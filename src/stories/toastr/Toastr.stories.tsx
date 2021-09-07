import { Story, Meta } from "@storybook/react";
import { Toastr, ToastrProps } from "./Toastr";
import { Text } from "../typography/Typography";

export default {
  title: "Toastr",
  component: Toastr,
} as Meta;

const Template: Story<ToastrProps> = (args) => (
  <div>
    <Toastr type="success" className="aq-mb-2">
      <div>{args.children}</div>
    </Toastr>
    <Toastr type="danger" className="aq-mb-2">
      <div>{args.children}</div>
    </Toastr>
    <Toastr
      type="info"
      className="aq-mb-2"
      onClose={() => {
        alert("onclose callback");
      }}
    >
      <div>{args.children}</div>
    </Toastr>
    <Toastr
      type="warning"
      className="aq-mb-2"
      onClose={() => {
        alert("onclose callback");
      }}
    >
      <div>{args.children}</div>
    </Toastr>
  </div>
);

export const ToastrVariants = Template.bind({});
ToastrVariants.args = {
  children: (
    <Text>
      <strong>Device Added</strong>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aliquam blanditiis cum dicta dignissimos, illo molestiae non, obcaecati
        officiis possimus quod ullam vitae. Ab commodi dolore exercitationem
        iusto, possimus veritatis?
      </div>
    </Text>
  ),
};
