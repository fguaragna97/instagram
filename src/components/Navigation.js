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
import { FaRegHeart, FaHome, FaRegComments } from "react-icons/fa";
import { BsPlusCircle, BsCompass, BsPerson } from "react-icons/bs";

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
              <FaHome size="25px"></FaHome>
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              <FaRegComments size="25px"></FaRegComments>
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              <BsPlusCircle size="25px"></BsPlusCircle>
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              <BsCompass size="25px"></BsCompass>
            </Nav.Link>

            <Nav.Link as={Link} to="/">
              <FaRegHeart size="25px"></FaRegHeart>
            </Nav.Link>

            <Nav.Link as={Link} to="/register">
              Sign Up
            </Nav.Link>

            <NavDropdown
              title={<BsPerson size="25px"></BsPerson>}
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
