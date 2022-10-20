import { Container, Row, Col} from 'react-bootstrap';
import { LoginButton } from '../Login/Login';

const Managementpage = () => {
    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861" }}>
            <Row>
                <p className='headerClient' style={{ fontSize: "40px", textAlign: "center", paddingTop: "20px", paddingBottom: "20px", fontFamily: "Koblenz" }}>
                    <b>Management</b>
                </p>
            </Row>
            <Row style={{ marginTop: "100px" }}>
                <Col >
                    <div align="center" style={{ marginTop: "20px" }}>
                        <LoginButton />
                    </div>

                </Col>
            </Row>
        </Container>


    );
}

export default Managementpage;