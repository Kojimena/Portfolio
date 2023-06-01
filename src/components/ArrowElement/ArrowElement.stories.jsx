import React from "react"
import ArrowElement from "./ArrowElement"

export default {
  title: "Nav/ArrowElement",
  component: ArrowElement,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

export const ArrowElementStory = {
  args: {
    text: "text",
    path: "/",
  },
}
