import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function CommentForm() {
  const [comment, setComment] = useState({
    by: "",
    parent: "",
    text: "",
    time: Date.now(),
    type: "comment",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(comment));
    // Here you can implement sending a comment to a HackerNews API endpoint
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="by" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="by"
          value={comment.by}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="parent" className="mb-3">
        <Form.Label>Article ID</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter article ID this comment is related to"
          name="parent"
          value={comment.parent}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="text" className="mb-3">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your comment"
          name="text"
          value={comment.text}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CommentForm;
