import React from "react";
import { Title } from "../src";

export default {
  title: "Components/Typography/Title",
  component: Title,
};

const Template = (args) => <Title {...args}>Spark Design</Title>;

export const Default = Template.bind({});
Default.args = {
  level: 1,
};

export const HeadingScale = () => (
  <div>
    <Title level="1">h1. Spark Design</Title>
    <Title level="2">h2. Spark Design</Title>
    <Title level="3">h3. Spark Design</Title>
    <Title level="4">h4. Spark Design</Title>
    <Title level="5">h5. Spark Design</Title>
    <Title level="6">h6. Spark Design</Title>
  </div>
);
