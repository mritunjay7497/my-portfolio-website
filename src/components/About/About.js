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
        <div className="about-section-header">
          <span className="section-kicker">About</span>
          <h1 className="section-heading">
            Backend engineering with product awareness, delivery discipline, and
            strong debugging instincts.
          </h1>
          <p className="about-lead">
            I enjoy translating ambiguous requirements into APIs, workflows, and
            data models that are easier for teams to ship, reason about, and
            support over time.
          </p>
        </div>

        <Row className="align-items-center justify-content-center g-4 about-hero-row">
          <Col md={7}>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <div className="about-illustration-shell">
              <img src={laptopImg} alt="Backend engineering illustration" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <h2 className="project-heading">Core Engineering Stack</h2>
        <Techstack />

        <h2 className="project-heading">Tooling and Workflow</h2>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
