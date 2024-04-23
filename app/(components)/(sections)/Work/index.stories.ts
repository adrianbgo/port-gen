import { Meta, StoryObj } from "@storybook/react";
import Work from ".";
import { TestPositiveResume } from "@/app/(utils)/testObjects";

const meta = {
  title: "Sections/Work",
  component: Work,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Work>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkStory: Story = {
  args: { work: TestPositiveResume.work },
};
