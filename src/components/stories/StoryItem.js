import React from "react";
import Card from "react-bootstrap/Card";
import cardImage from "../../assets/images/card_image.jpeg";
import Badge from "react-bootstrap/Badge";

function StoryItem({ story }) {
  return (
    <Card className="mb-4 position-relative">
      <Card.Img variant="top" src={cardImage} />
      <Card.Body>
        <Card.Title>
          <span className="mt-1">{story.id}</span>{" "}
          <Badge pill bg="primary">
            <small>{story.type}</small>
          </Badge>
        </Card.Title>
        <Card.Text className="text-truncate">{story.title}</Card.Text>
        <Card.Link href={story.url}>Read</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default StoryItem;
