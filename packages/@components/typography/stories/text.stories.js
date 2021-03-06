import React from "react";
import { Text } from "../src";

export default {
  title: "Components/Typography/Text",
  component: Text,
};

const Template = (args) => <Text {...args}>Spark Text</Text>;

export const Default = Template.bind({});

export const ColorScale = () => (
  <div>
    <Text color="primary">Spark Text (primary)</Text>
    <Text color="secondary">Spark Text (secondary)</Text>
    <Text color="informative">Spark Text (informative)</Text>
    <Text color="positive">Spark Text (positive)</Text>
    <Text color="notice">Spark Text (notice)</Text>
    <Text color="negative">Spark Text (negative)</Text>
  </div>
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Paragraph = () => (
  <div>
    <Text paragraph>Spark Text</Text>
    <Text>The text above has paragraph margins. This one doesn't</Text>
    <Text>You can see normal margins above this one.</Text>
  </div>
);
