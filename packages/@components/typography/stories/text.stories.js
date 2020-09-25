import React from "react";
import { Text } from "../src";

export default {
  title: "Components/Typography/Text",
  component: Text,
};

const Template = (args) => <Text {...args}>Spark Text</Text>;

export const Primary = Template.bind({});

export const Informative = Template.bind({});
Informative.args = {
  color: "informative",
};

export const Positive = Template.bind({});
Positive.args = {
  color: "positive",
};

export const Notice = Template.bind({});
Notice.args = {
  color: "notice",
};

export const Negative = Template.bind({});
Negative.args = {
  color: "negative",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
