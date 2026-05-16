import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-card-copy">
            I&apos;m a <span className="purple">software engineer with 5+ years of experience</span> focused
            on backend development, integration-heavy systems, and maintainable
            delivery.
          </p>

          <p className="about-card-copy">
            My day-to-day strengths sit across <span className="purple">Java,
            Spring Boot, Node.js and TypeScript</span>, with practical experience designing
            and supporting systems backed by <span className="purple">PostgreSQL, MySQL, MongoDB,
            Redis and Kafka</span>.
          </p>

          <p className="about-card-copy">
            I care about software that feels calm in production: clear contracts,
            reliable workflows, better debugging surfaces, and codebases that stay
            approachable for the next engineer.
          </p>

          <ul className="about-activity-list">
            <li className="about-activity">
              <ImPointRight /> API and integration design with readable service boundaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Data modeling and persistence decisions grounded in product behavior
            </li>
            <li className="about-activity">
              <ImPointRight /> Observability, debugging, and production issue resolution
            </li>
            <li className="about-activity">
              <ImPointRight /> Technical writing through <Link to="/blogs" className="about-link">blogs and notes</Link>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
