import { Container, Row, Col} from 'react-bootstrap';
import { LogoutButton } from '../../Login/Login';
import Available from './available';


const Officerpage = ({user, logout}) =>{
    

    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861" }}>
            <Row>
                <p className='headerClient' style={{ fontSize: "40px", textAlign: "center", paddingTop: "20px", paddingBottom: "20px", fontFamily: "Koblenz" }}>
                    <b>Officer</b>
                    <br></br>
                    {<b>Benvenuto {user && user.name}</b>}
                    <br></br>
                    {<LogoutButton logout={logout} user={user} />}
                </p>
            </Row>
            <Row>
                <Col >
                    <Available user={user}/>
                </Col>
            </Row>
        </Container>


    );
}

export default Officerpage;

