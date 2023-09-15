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
        video: "https://file.notion.so/f/f/ebe45e49-06f7-4e3d-a9d0-4d2e237b91e3/db455fb6-c503-46d7-981f-059b4097760b/230913_Story_1_-_Internet_Users.mp4?id=d737fe03-878c-427d-b03b-7275ada26b33&table=block&spaceId=ebe45e49-06f7-4e3d-a9d0-4d2e237b91e3&expirationTimestamp=1694851200000&signature=bQ5uyCzdO_EGd12iGkXMLy6B689NmFswQGlMv2PbePs&downloadName=230913_Story+1+-+Internet+Users.mp4",
        width: 800,
    },
};
