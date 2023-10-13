import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StoryItem from "./StoryItem";

describe("<StoryItem />", () => {
  const mockStory = {
    id: 123,
    title: "Test Story",
    url: "https://test-story.com",
    type: "story",
  };

  it("renders the story ID", () => {
    render(<StoryItem story={mockStory} />);
    expect(screen.getByText(mockStory.id)).toBeInTheDocument();
  });

  it("renders the story title", () => {
    render(<StoryItem story={mockStory} />);
    expect(screen.getByText(mockStory.title)).toBeInTheDocument();
  });

  it("renders the story link with correct href", () => {
    render(<StoryItem story={mockStory} />);
    const linkElement = screen.getByText("Read");
    expect(linkElement).toHaveAttribute("href", mockStory.url);
  });
});
