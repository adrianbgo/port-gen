import { Meta, StoryObj } from "@storybook/react";
import Employer from ".";

const meta = {
  title: "Molecules/Employer",
  component: Employer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Employer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmployerStory: Story = {
  args: {},
};
