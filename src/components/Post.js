import React from "react";
import { Card, Image } from "react-bootstrap";
import placeholder from "../placeholder.jpeg";
import { Link } from "react-router-dom";
import heart from "../heart.png";
import dialog from "../dialog.png";
import directmessage from "../directmessage.png";

export default function Post() {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>Username</Card.Title>
        <Card.Img src={placeholder} />
        <Card.Link as={Link} to="/">
          <Image src={heart} width="26px" />
        </Card.Link>
        <Card.Link as={Link} to="/">
          <Image src={dialog} width="22px" />
        </Card.Link>
        <Card.Link as={Link} to="/">
          <Image src={directmessage} width="27px" />
        </Card.Link>

        <Card.Text>This is the caption of the Image</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
