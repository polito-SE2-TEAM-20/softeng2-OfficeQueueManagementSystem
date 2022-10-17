import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style/client-style.css';

const ClientStand = () => {
    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861" }}>
            <Row>
                <p className='headerClient' style={{ fontSize: "40px", textAlign: "center", paddingTop: "20px", paddingBottom: "20px", fontFamily: "Koblenz" }}>
                    <b>Please select a service to get enqueued.</b>
                </p>
            </Row>
            <Row style={{marginTop: "100px"}}>
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