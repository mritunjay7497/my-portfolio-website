import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            I am a <span className="purple">software engineer with over 3.5 years of experience</span> in backend development,
              specializing in <span className="purple">JavaScript, TypeScript, NodeJS and Salesforce</span>.
            <br /><br />
            I have expertise in databases like <span className="purple">MongoDB, PostgreSQL, MySQL, and Redis</span>, focusing on implementing effective solutions to meet business needs.
            <br /><br />
            My goal is to deliver efficient, high-performing applications that make an impact.
            <br /><br />
            Apart from coding, here are some other activities that I love to do -
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> <a href="/blogs" style={{textDecoration : "None", color: "white"}}>Writing Tech Blogs</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
