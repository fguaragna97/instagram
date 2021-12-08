import React from "react";
import { Card, Image } from "react-bootstrap";
import placeholder from "../placeholder.jpeg";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";

export default function Post() {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Username</Card.Title>
        <Card.Img src={placeholder} />
        <Card.Link as={Link} to="/home">
          <FaRegHeart size="23px" color="gray"></FaRegHeart>
        </Card.Link>
        <Card.Link as={Link} to="/home">
          <FaRegComment size="23px" color="gray"></FaRegComment>
        </Card.Link>
        <Card.Link as={Link} to="/home">
          <FaRegPaperPlane size="23px" color="gray"></FaRegPaperPlane>
        </Card.Link>

        <Card.Text>This is the caption of the Image</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
