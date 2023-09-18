import type { Meta, StoryObj } from "@storybook/react";
import { VideoScroll } from "../";

const meta = {
    title: "Example/VideoScroll",
    component: VideoScroll,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        video: { control: "text" },
        lengthScroll: { control: { type: "range", min: 1.5, max: 5, step: 0.1 } },
    },
} satisfies Meta<typeof VideoScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        video: "https://file.notion.so/f/f/ebe45e49-06f7-4e3d-a9d0-4d2e237b91e3/c6e75dc9-b5b3-4fde-b79f-a40131078d4e/230913_Story_4_-_International_revenue_5.mp4?id=cdb44da2-04c0-4356-945a-1e4f26905d5a&table=block&spaceId=ebe45e49-06f7-4e3d-a9d0-4d2e237b91e3&expirationTimestamp=1695103200000&signature=6UoS-4_D0TFY84N6Bx21yQPkre-HizF7GwpivzpkAzI",
        width: 800,
    },
};
