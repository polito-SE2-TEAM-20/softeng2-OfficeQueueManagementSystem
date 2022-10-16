import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style/style.css';

const ClientStand = () => {
    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "lightgreen" }}>
            <Row>
                <p style={{ fontSize: "40px", textAlign: "center", paddingTop: "20px", fontFamily: "Koblenz" }}>
                    <b>Please select a service to get enqueued.</b>
                </p>
            </Row>
            <Row>
                <Col className="button">
                    SERVICE NAME WITH AN ICON
                </Col>
                <Col className="button">
                    SERVICE NAME WITH AN ICON
                </Col>
                <Col className="button">
                    SERVICE NAME WITH AN ICON
                </Col>
            </Row>
            <Row>
                <Col className="button">
                    SERVICE NAME WITH AN ICON
                </Col>
                <Col className="button">
                    SERVICE NAME WITH AN ICON
                </Col>
                <Col className="button">
                    SERVICE NAME WITH AN ICON
                </Col>
            </Row>
        </Container>
    );
}

export default ClientStand;