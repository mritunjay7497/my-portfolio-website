import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Minimal intro */}
        <div className="about-intro">
          <span className="section-kicker">About</span>
          <h1 className="section-heading-minimal">
            Backend systems, built with purpose.
          </h1>
        </div>

        {/* Two-column layout: content + illustration */}
        <Row className="align-items-center g-4 about-hero-row">
          <Col md={6}>
            <Aboutcard />
          </Col>
          <Col md={6} className="about-img">
            <div className="about-illustration-shell">
              <img src={laptopImg} alt="Backend engineering illustration" className="img-fluid" />
            </div>
          </Col>
        </Row>

        {/* Simplified tech stack sections */}
        <div className="tech-stack-simple">
          <Techstack />
          <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;