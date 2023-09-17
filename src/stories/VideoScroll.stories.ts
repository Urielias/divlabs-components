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
        video: "https://www.shutterstock.com/shutterstock/videos/1107153157/preview/stock-footage-square-purple-neon-loop-fps-full-hd-mp-video.webm",
        width: 800,
    },
};
