import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Header(props) {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between">
        <Navbar.Brand className="d-flex ">
          {props.loading ? (
            <Skeleton height={30} />
          ) : (
            <img
              src="https://react-bootstrap.netlify.app//img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll ">
          <Nav
            className=" d-flex justify-content-end"
           
            navbarScroll
          >
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link eventKey="link-1">Our Services</Nav.Link>
            <Nav.Link eventKey="link-2" id="navbarScrollingDropdown">
              Contact Us
            </Nav.Link>
            <Nav.Link eventKey="link-2">Business PDF</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Nav.Item className="mx-1 ">
              <Button variant="success rounded-pill">Login</Button>{" "}
            </Nav.Item>
            <Nav.Item className="mx-1 ">
              <Button variant="success rounded-pill">Registration</Button>{" "}
            </Nav.Item>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
