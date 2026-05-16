import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogParser from "./BlogParser";

function Blogs({blogUrl}) {

    return (
        <Container fluid className="blog-section">
            <Particle />
            <Container>
                <section className="blog-index-hero">
                    <div className="section-copy">
                        <span className="section-kicker">Writing</span>
                        <h1 className="section-heading">
                            Notes, walkthroughs, and backend lessons I wanted to explain clearly enough to revisit later.
                        </h1>
                        <p className="section-intro">
                            These articles now open directly on this site so the reading experience stays focused, fast, and consistent.
                        </p>
                    </div>
                </section>

                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={12}>
                        <div className="blogs-cards">
                            <BlogParser feedUrl={blogUrl}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
                    
}

export default Blogs;
