import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import classes from "./navbar.module.css";
import Logo from "../../assets/images/instagram.png";

export default function NavBar() {
  return (
    <div className={`border-bottom sticky-top  ${classes.navBar}`}>
      <div className="py-2  d-flex">
        <div className={`d-none ${classes.camera}`}>
          <a href="/">
            <i class="bi bi-camera"></i>
          </a>
        </div>
        <Navbar.Brand href="/">
          <img src={Logo} className="" alt="instagram" />
        </Navbar.Brand>
        <div className={`d-none ${classes.messenger}`}>
          <a href="/">
            <i class="bi bi-messenger"></i>
          </a>
        </div>

        <Form.Group className="mx-auto d-none d-sm-block">
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>
        <Nav className={`ms-auto ${classes.desktopNav}`}>
          <Nav.Item>
            <a href="/">
              <i className="bi bi-house-door-fill"></i>
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="/inbox">
              <i class="bi bi-messenger"></i>
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="/post/new">
              <i class="bi bi-plus-circle"></i>
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
    </div>
  );
}
