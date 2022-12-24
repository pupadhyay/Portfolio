import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "../../Components/Navigation/Navigation";
const HeaderPrimary = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="header_primary"
    >
      <Container className="py-2">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderPrimary;
