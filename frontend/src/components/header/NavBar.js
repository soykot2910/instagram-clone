import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import Logo from "../../assets/images/instagram.png";

export default function NavBar() {
  return (
    <div className="border-bottom">
      <Container>
        <div className="py-2 d-flex">
          <Navbar.Brand href="/">
            <img src={Logo} alt="instagram" />
          </Navbar.Brand>
          <Form.Group className="mx-auto d-none d-md-block">
            <Form.Control type="email" placeholder="Search" />
          </Form.Group>
          <Nav className="ms-auto">
            <Nav.Item>
              <a href="/">
                <i className="bi bi-house-door-fill"></i>
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="/">
                <i class="bi bi-messenger"></i>
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="/">
                <i class="bi bi-compass"></i>
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="/">
                <i class="bi bi-heart"></i>
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="/">
                <i class="bi bi-person-circle"></i>
              </a>
            </Nav.Item>
          </Nav>
        </div>
      </Container>
    </div>
  );
}
