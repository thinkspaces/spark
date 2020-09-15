import React from "react";
import Button from "../src";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Sample</Button>;

export const Primary = Template.bind({});

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
};
