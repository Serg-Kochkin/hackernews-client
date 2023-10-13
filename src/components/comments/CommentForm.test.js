import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CommentForm from "./CommentForm";

test("renders the comment input fields and allows typing", () => {
  render(<CommentForm />);

  const nameInput = screen.getByPlaceholderText("Enter your name");
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  expect(nameInput.value).toBe("John Doe");

  const idInput = screen.getByPlaceholderText("Enter your name");
  fireEvent.change(idInput, { target: { value: 123 } });
  expect(idInput.value).toBe("123");

  const commentInput = screen.getByPlaceholderText("Enter your comment");
  fireEvent.change(commentInput, { target: { value: "Nice article!" } });
  expect(commentInput.value).toBe("Nice article!");
});
