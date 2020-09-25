import React from "react";
import { Text } from "../src";

export default {
  title: "Components/Typography/Text",
  component: Text,
};

const Template = (args) => <Text {...args}>Spark Text</Text>;

export const Primary = Template.bind({});
