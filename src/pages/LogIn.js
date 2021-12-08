import React from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col lg="6">
          <Card style={{ width: "350px" }}>
            <h1 class="justify-content-center">Instagram</h1>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
              <div className="d-grid gap-1">
                <Button variant="primary">Log In</Button>
                <p>
                  Don't have an account?
                  <Nav.Link as={Link} to="/register">
                    Sign Up
                  </Nav.Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
