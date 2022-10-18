import { Container, Row, Col, Alert} from 'react-bootstrap';
import { LogoutButton } from '../Login/Login';

const Officerpage = ({user, logout}) =>{
    return (
        <Container fluid>
        <Row>
        <Col className='col-10'>
        <div>

        {<LogoutButton logout={logout} user={user} /> }
        {<h4>Benvenuto officer {user && user.name}</h4>}
        </div>
  
        </Col>
        </Row>
        <Row >
        <Col className = 'col-5'>
        </Col>
          
          </Row>
    </Container>


    );
}

export default Officerpage;