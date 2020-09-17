import React from "react";
import Button from "@components/button";

import Card from "../src";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Sample",
  description: "Some fun sample text description, that hopefully filling up the space.",
  tags: [
    {
      name: "Idea",
    },
    {
      name: "Tech",
    },
    {
      name: "Beta",
    },
  ],
};

export const CardWithButton = Template.bind({});
CardWithButton.args = {
  name: "Sample",
  description: "Some fun sample description, displaying card with sub content example button.",
  tags: [
    {
      name: "Idea",
    },
    {
      name: "Tech",
    },
    {
      name: "Beta",
    },
  ],
  children: <Button variant="outlined">Likes 1</Button>,
};

export const Ellipses = Template.bind({});
Ellipses.args = {
  name: "Sample",
  description:
    "Some fun sample text description, that hopefully filling up the space. When this gets to long it trails off",
  tags: [
    {
      name: "Idea",
    },
    {
      name: "Tech",
    },
    {
      name: "Beta",
    },
  ],
};
