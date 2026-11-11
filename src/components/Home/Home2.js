import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMediumCircle, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "https://github.com/mritunjay7497",
    label: "GitHub",
    icon: <AiFillGithub />
  },
  {
    href: "https://x.com/plusx0x07",
    label: "X",
    icon: <AiOutlineTwitter />
  },
  {
    href: "https://www.linkedin.com/in/mritunjay-kumar-b83538149/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />
  },
  {
    href: "https://plusx0x07.medium.com/",
    label: "Medium",
    icon: <AiFillMediumCircle />
  }
];

function Home2() {
  return (
    <Container fluid className="home-connect" id="connect">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <span className="section-kicker">Connect</span>
            <h3 className="section-heading-minimal">
              Systems, tools, and technical writing
            </h3>
            <p className="hero-subtitle">
              For code, writing, and discussions around backend architecture.
            </p>
            <div className="connect-links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="connect-link"
                >
                  <span className="connect-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
