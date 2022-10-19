import { Link} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import {  Button } from 'react-bootstrap';

function NotFoundLayout() {
    return (
      <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861" }}>
          <Row>
              <p className='headerClient' style={{ fontSize: "40px", textAlign: "center", paddingTop: "20px", paddingBottom: "20px", fontFamily: "Koblenz" }}>
                  <b>Post Office</b>
                  <br></br>
                  <b style={{marginLeft: "20px"}}>

                  
                  <Link to="/management">
                    <Button variant='primary'>Management</Button>
                  </Link>
                  </b>
                  <Link to="/mainscreen">
                    <Button variant='primary'>Main Screen</Button>
                  </Link>
                  <Link to="/clientstand">
                    <Button variant='primary'>Client Stand</Button>
                  </Link>

              </p>
          </Row>
      </Container>


  );
  }

  export {  NotFoundLayout }; 

