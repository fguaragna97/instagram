import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Post from "../components/Post";

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg="6">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </Col>
      </Row>
    </Container>
  );
}
