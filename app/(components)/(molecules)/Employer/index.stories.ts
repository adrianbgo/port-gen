import { Meta, StoryObj } from "@storybook/react";
import Employer from ".";
import { TestPositiveResume } from "@/app/(utils)/testObjects";

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
  args: { data: TestPositiveResume.work[0] },
};
