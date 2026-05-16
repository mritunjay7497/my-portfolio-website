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
    <Container fluid className="home-about-section" id="connect">
      <Container className="signal-strip">
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <span className="section-kicker">Signals beyond the homepage</span>
            <h2 className="section-heading">
              I write, read, and keep refining how systems are documented,
              debugged, and operated.
            </h2>
            <p className="section-intro">
              If you want a better sense of how I think, the best follow-up is my
              writing, resume, and the way I frame backend work around clarity and
              reliability instead of buzzwords.
            </p>
            <div className="signal-actions">
              <Link to="/blogs" className="signal-link">
                Explore blogs
              </Link>
              <Link to="/books" className="signal-link">
                Open bookshelf
              </Link>
            </div>
          </Col>

          <Col lg={5}>
            <div className="social-panel">
              <span className="board-label">Connect</span>
              <ul className="social-grid">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link-card"
                    >
                      <span className="social-link-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
