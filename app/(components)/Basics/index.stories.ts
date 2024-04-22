import type { Meta, StoryObj } from "@storybook/react";
import Basics from ".";

const meta = {
  title: "Sections/Basics",
  component: Basics,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Basics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicsStory: Story = {
  args: {},
};
