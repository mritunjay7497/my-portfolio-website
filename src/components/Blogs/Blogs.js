import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogParser from "./BlogParser";

function Blogs() {
    const mediumFeedUrl = "https://medium.com/feed/@plusx0x07";
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={12}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            <strong className="purple">Blogs</strong>
                        </h1>
                        <div className="blogs-cards">
                            <BlogParser feedUrl={mediumFeedUrl}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
                    
}

export default Blogs;