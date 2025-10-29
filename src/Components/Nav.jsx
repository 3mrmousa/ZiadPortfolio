import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavStyle.css";

import { useEffect, useState } from "react";


function NavBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`portfolio-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#hero-section" className="fw-bold text-uppercase">
          Ziad Tamer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero-section" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link href="#about-section" className="px-3">
              About
            </Nav.Link>
            <Nav.Link href="#skills-section" className="px-3">
              Skills
            </Nav.Link>
            <Nav.Link href="#contact-section" className="px-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
