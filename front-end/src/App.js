import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MSNewTicket from './main-screen/MSNewTicket';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import TimeAndDate from './main-screen/TimeAndDate'
import QueueHistory from './main-screen/QueueHistory';
import OQMS from './main-screen/OQMS';
import ClientStand from './client-stand/ClientStand';

function App() {
  return (
      <Container fluid>
      <Row>
        <OQMS />
      </Row>
      <Row style={{minHeight: "100vh"}}>
        <Col className='col-8' style={{ backgroundColor: "#31A861" }}>
          <MSNewTicket />
        </Col>
        <Col className='col-4' style={{ backgroundColor: "#414141" }}>
          <QueueHistory />
        </Col>
      </Row>
      <TimeAndDate />
    </Container>
  );
}

export default App;
