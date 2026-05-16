import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-lockup">
          <span className="brand-mark">M</span>
          <span className="brand-copy">
            <strong>Mritunjay Kumar Mani</strong>
            <small>Backend Systems Engineer</small>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" end onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={NavLink} to="/about" onClick={() => updateExpanded(false)}>
                About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link as={NavLink} to="/resume" onClick={() => updateExpanded(false)}>
                Resume
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link as={NavLink} to="/blogs" onClick={() => updateExpanded(false)}>
                Writing
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={NavLink} to="/books" onClick={() => updateExpanded(false)}>
                Bookshelf
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
