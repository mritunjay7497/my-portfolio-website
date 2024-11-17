import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


function Books() {

    return (
        <Container fluid className="book-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={12}>
                        <div>
                            <h1>Coming soon ....</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
                    
}

export default Books;