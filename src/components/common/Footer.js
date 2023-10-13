import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container
        fluid
        style={{
          backgroundColor: "#f8f9fa",
          marginTop: "2rem",
          padding: "1rem 0",
        }}
        className="py-5"
      >
        <Row>
          <Col className="text-center">
            © 2023 HackerNews Client. Serhiy Kochkin.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
