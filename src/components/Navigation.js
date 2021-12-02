import React from "react";
import {
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../home.png";
import messages from "../messages.png";
import add from "../add.png";
import compass from "../compass.png";
import heart from "../heart.png";
import profile from "../profile.png";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav.Link as={Link} to="/">
            <Navbar.Brand href="#home">Instagram</Navbar.Brand>
          </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/">
              <Image src={Home} width="25px" />
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              <Image src={messages} width="25px" />
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              <Image src={add} width="25px" />
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              <Image src={compass} width="25px" />
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              <Image src={heart} width="25px" />
            </Nav.Link>

            <Nav.Link as={Link} to="/register">
              Sign Up
            </Nav.Link>

            <NavDropdown
              title={
                <Image
                  className="thumbnail-image"
                  src={profile}
                  alt="user pic"
                  width="20px"
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Saved</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
