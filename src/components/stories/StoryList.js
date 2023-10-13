import React, { useEffect, useState } from "react";
import axios from "axios";
import StoryItem from "./StoryItem";
import { Spinner } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function StoryList() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const limitOfStories = 9;

  useEffect(() => {
    async function fetchStories() {
      try {
        const { data } = await axios.get(
          `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=${limitOfStories}&orderBy=%22$key%22`
        );

        const storyDetails = await Promise.all(
          data.map((id) =>
            axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
            )
          )
        );

        setStories(storyDetails.map((response) => response.data));
      } catch (error) {
        console.error("Error fetching the stories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status" variant="primary"></Spinner>
      </div>
    );
  }

  return (
    <section>
      <h1 className="my-5">HackerNews Client</h1>
      <Row>
        {stories.map((story) => (
          <Col xs={12} md={6} lg={4}>
            <StoryItem key={story.id} story={story} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default StoryList;
