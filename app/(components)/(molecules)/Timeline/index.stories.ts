import { Meta, StoryObj } from "@storybook/react";
import Timeline from ".";

const meta = {
  title: "Molecules/Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimelineStory: Story = {
  args: {},
};
