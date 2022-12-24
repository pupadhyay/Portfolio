import React from "react";
import Nav from "react-bootstrap/Nav";
const Navigation = () => {
  return (
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">About Me</Nav.Link>
      <Nav.Link href="/">Skills</Nav.Link>
      <Nav.Link href="/">Services</Nav.Link>
      <Nav.Link href="/">Portfolio</Nav.Link>
      <Nav.Link href="/">Blogs</Nav.Link>
      <Nav.Link href="/">Contact</Nav.Link>
    </Nav>
  );
};

export default Navigation;
