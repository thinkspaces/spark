import React from "react";
import { Title } from "../src";

export default {
  title: "Components/Typography/Title",
  component: Title,
};

const Template = (args) => <Title {...args}>Spark Design</Title>;

export const Primary = Template.bind({});
Primary.args = {
  level: 1,
};

export const Scale = () => (
  <div>
    <Title level="1">1. Spark Design</Title>
    <Title level="2">2. Spark Design</Title>
    <Title level="3">3. Spark Design</Title>
    <Title level="4">4. Spark Design</Title>
    <Title level="5">5. Spark Design</Title>
    <Title level="6">6. Spark Design</Title>
  </div>
);
