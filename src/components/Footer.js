import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillMediumCircle, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Container>
        <Row className="align-items-center gy-3">
          <Col md={5} className="footer-copywright">
            <h3>Mritunjay Kumar Mani</h3>
            <p>Backend engineering focused on APIs, data, reliability, and maintainable delivery.</p>
          </Col>
          <Col md={4} className="footer-copywright">
            <h3>Copyright {year}</h3>
            <p>Built as an engineering-first portfolio, not a template showcase.</p>
          </Col>
          <Col md={3} className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/mritunjay7497"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/plusx0x07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mritunjay-kumar-b83538149/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://plusx0x07.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium"
                >
                  <AiFillMediumCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
