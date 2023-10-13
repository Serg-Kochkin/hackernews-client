import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logoImg from "../../assets/images/Logo@2x.png";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary my-2 rounded"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={logoImg}
            style={{
              width: "75px",
              height: "41px",
            }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="">
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#WhatWeDo">What We Do</Nav.Link>
            <Nav.Link href="#OurStuff">Our Stuff</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
