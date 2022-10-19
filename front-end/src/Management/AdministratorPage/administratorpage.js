import { Container, Row, Col, Alert} from 'react-bootstrap';
import { LogoutButton } from '../../Login/Login';
import FormAssignServices from './formadmin';

const Administratorpage = ({ user, logout }) => {
    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861" }}>
            <Row>
                <p className='headerClient' style={{ fontSize: "40px", textAlign: "center", paddingTop: "20px", paddingBottom: "20px", fontFamily: "Koblenz" }}>
                    <b>Administrator</b>
                    <br></br>
                    {<b>Benvenuto {user && user.name}</b>}
                    <br></br>
                    {<LogoutButton logout={logout} user={user} />}
                </p>
            </Row>
            <Row>
            <Col >
                    <FormAssignServices />
                </Col>
            </Row>
        </Container>
    );
}

export default Administratorpage;