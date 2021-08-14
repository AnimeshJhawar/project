/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Story, Meta } from "@storybook/react";
import { StroopInstructions } from "../screens/StroopInstructions";
import "antd/dist/antd.css";

export default {
  title: "Games/StroopInstructions",
  component: StroopInstructions,
} as Meta;

const Template: Story = (args) => <StroopInstructions {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
