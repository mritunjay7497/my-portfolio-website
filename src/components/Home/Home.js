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
          <Row className="align-items-center gy-5">
            <Col lg={7} className="home-copy">
              <span className="home-eyebrow">Backend Engineer • APIs • Data • Reliability</span>
              <h1 className="home-title">
                I build backend systems that stay understandable under growth
                and dependable under pressure.
              </h1>
              <p className="home-summary">
                I&apos;m Mritunjay Kumar Mani, a software engineer with 5+ years of
                experience building backend-heavy products across Java,
                Java, Spring Boot, NodeJS, Typescript, Salesforce, and data-intensive
                workflows.
              </p>
              <div className="home-rotator">
                <span className="home-rotator-label">What I optimize for</span>
                <Type />
              </div>
              <div className="hero-actions">
                {/* <Button as={Link} to="/resume" variant="primary" className="hero-btn hero-btn-primary">
                  <FiDownload />
                  <span>View Resume</span>
                </Button> */}
                <Button as={Link} to="/blogs" variant="outline-light" className="hero-btn hero-btn-secondary">
                  <span>Read Technical Writing</span>
                  <FiArrowRight />
                </Button>
              </div>
              <div className="metrics-grid">
                {impactMetrics.map((metric) => (
                  <article key={metric.label} className="metric-card">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
            </Col>

            <Col lg={5}>
              <div className="system-board">
                <div className="board-header">
                  <div>
                    <span className="board-label">Production mindset</span>
                    <h2>Architecture snapshot</h2>
                  </div>
                  <span className="board-status">stable</span>
                </div>

                <div className="board-layers">
                  {architectureLayers.map((layer, index) => (
                    <div key={layer.title} className="board-layer">
                      <span className="board-layer-index">0{index + 1}</span>
                      <div>
                        <h3>{layer.title}</h3>
                        <p>{layer.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="board-log">
                  <div className="board-log-header">
                    <FiLayers />
                    <span>Design targets</span>
                  </div>
                  <div className="log-line">
                    <span>reliability</span>
                    <strong>clear failure paths</strong>
                  </div>
                  <div className="log-line">
                    <span>performance</span>
                    <strong>predictable latency over guesswork</strong>
                  </div>
                  <div className="log-line">
                    <span>maintainability</span>
                    <strong>readable systems other engineers can own</strong>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <section className="home-story-section">
            <div className="section-copy">
              <span className="section-kicker">Why this portfolio feels different</span>
              <h2 className="section-heading">
                Strong backend portfolios are less about decoration and more
                about proof.
              </h2>
              <p className="section-intro">
                The best engineering portfolios in 2026 tend to feel like small
                case-study systems: crisp positioning, architecture language,
                measurable credibility, and evidence of how the engineer thinks
                when real software has to scale, fail, and recover.
              </p>
            </div>

            <Row className="g-4">
              {capabilities.map((capability) => (
                <Col md={6} key={capability.title}>
                  <article className="capability-card">
                    <div className="capability-icon">{capability.icon}</div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </article>
                </Col>
              ))}
            </Row>
          </section>

          <section className="architecture-section">
            <Row className="g-4 align-items-stretch">
              <Col lg={7}>
                <article className="architecture-card">
                  <span className="section-kicker">System design lens</span>
                  <h2 className="section-heading">How I usually shape backend work</h2>
                  <p className="section-intro">
                    I like decomposing backend problems into contracts, workflow
                    boundaries, persistence choices, and observability touchpoints
                    so the system is easier to extend and easier to debug.
                  </p>
                  <div className="architecture-flow">
                    <div className="architecture-node">
                      <h3>Interface</h3>
                      <p>Input validation, auth, and rate-aware request entry</p>
                    </div>
                    <div className="architecture-node">
                      <h3>Domain logic</h3>
                      <p>Rules, orchestration, side effects, and business intent</p>
                    </div>
                    <div className="architecture-node">
                      <h3>Persistence</h3>
                      <p>Schema design, query patterns, caching, and data integrity</p>
                    </div>
                    <div className="architecture-node">
                      <h3>Operations</h3>
                      <p>Logs, diagnostics, recovery, and continuous improvement</p>
                    </div>
                  </div>
                </article>
              </Col>

              <Col lg={5}>
                <article className="principles-card">
                  <span className="section-kicker">Engineering principles</span>
                  <h2 className="section-heading">What I care about in production</h2>
                  <ul className="principles-list">
                    {engineeringPrinciples.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                </article>
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
