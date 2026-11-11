import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FiActivity, FiArrowRight, FiDatabase, FiDownload, FiLayers } from "react-icons/fi";
import { RiRouteLine, RiServerLine } from "react-icons/ri";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const impactMetrics = [
  {
    value: "5+",
    label: "years in backend-heavy delivery"
  },
  {
    value: "5",
    label: "core ecosystems across Java, Typescript, Spring Boot, NodeJS, Cloud, and CRM"
  },
  {
    value: "4",
    label: "data stores used in production-oriented work"
  },
  {
    value: "24/7",
    label: "ownership mindset around reliability and supportability"
  }
];

const capabilities = [
  {
    icon: <RiRouteLine />,
    title: "API design with clear contracts",
    description:
      "I focus on service boundaries, versioning discipline, and integration surfaces that stay understandable as teams and product scope grow."
  },
  {
    icon: <FiDatabase />,
    title: "Data models that reflect business reality",
    description:
      "From relational schemas to caching strategy, I care about consistency, query behavior, and choosing storage patterns that age well."
  },
  {
    icon: <FiActivity />,
    title: "Operational visibility by default",
    description:
      "Logging, failure paths, and debugging ergonomics are part of the build, not the cleanup phase after release pressure shows up."
  },
  {
    icon: <RiServerLine />,
    title: "Delivery that stays pragmatic",
    description:
      "I like systems that are maintainable by the next engineer, cheap to reason about, and reliable enough to disappear into the background."
  }
];

const architectureLayers = [
  {
    title: "Client surface",
    detail: "Web apps, partner integrations, and internal tooling entry points"
  },
  {
    title: "API boundary",
    detail: "REST endpoints, authentication, validation, and rate-aware request handling"
  },
  {
    title: "Service logic",
    detail: "Business rules, workflows, domain decisions, and side-effect orchestration"
  },
  {
    title: "Data and state",
    detail: "PostgreSQL, MySQL, MongoDB, Redis, and persistence patterns aligned with access needs"
  },
  {
    title: "Observability loop",
    detail: "Structured logs, metrics thinking, and production debugging discipline"
  }
];

const engineeringPrinciples = [
  "Prefer boring, dependable designs over clever architectures that are hard to operate.",
  "Make production behavior visible early through logs, metrics, and explicit failure handling.",
  "Design for handoff so another engineer can extend the system without reverse-engineering intent.",
  "Treat performance, data integrity, and maintainability as first-class product features."
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          {/* Minimal hero - name, role, one-liner */}
          <Row className="justify-content-center">
            <Col lg={10} xl={8} className="hero-minimal">
              <span className="hero-eyebrow">Backend Engineer</span>
              <h1 className="hero-title-large">
                Mritunjay Kumar Mani
              </h1>
              <p className="hero-subtitle">
                I build backend systems that stay dependable under pressure.
              </p>
              <div className="hero-actions-minimal">
                <Button as={Link} to="/blogs" className="hero-btn hero-btn-primary">
                  <span>Writing</span>
                  <FiArrowRight />
                </Button>
                <Button as={Link} to="/about" className="hero-btn hero-btn-secondary">
                  <span>About</span>
                  <FiArrowRight />
                </Button>
              </div>
            </Col>
          </Row>

          {/* Simple 3-column highlight cards */}
          <section className="home-highlights">
            <Row className="g-4 justify-content-center">
              <Col md={4}>
                <article className="highlight-card">
                  <RiServerLine className="highlight-icon" />
                  <h3>APIs & Services</h3>
                  <p>Spring Boot, Node.js, REST, GraphQL</p>
                </article>
              </Col>
              <Col md={4}>
                <article className="highlight-card">
                  <FiDatabase className="highlight-icon" />
                  <h3>Data Systems</h3>
                  <p>PostgreSQL, MongoDB, Redis, caching strategies</p>
                </article>
              </Col>
              <Col md={4}>
                <article className="highlight-card">
                  <FiActivity className="highlight-icon" />
                  <h3>Production Focus</h3>
                  <p>Observability, reliability, performance</p>
                </article>
              </Col>
            </Row>
          </section>

          {/* Single featured section */}
          <section className="home-featured">
            <Row className="justify-content-center">
              <Col lg={8}>
                <span className="section-kicker">Experience</span>
                <h2 className="section-heading-minimal">
                  5+ years building backend-heavy products across Java, TypeScript, and cloud platforms
                </h2>
              </Col>
            </Row>
          </section>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
