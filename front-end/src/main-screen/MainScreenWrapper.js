import MSNewTicket from './MSNewTicket';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import TimeAndDate from './TimeAndDate'
import QueueHistory from './QueueHistory';
import OQMS from './OQMS';
import { useState, useEffect } from 'react'

const MainScreenWrapper = () => {
    const [listOfTickets, setListOfTickets] = useState([
        { ticketCode: "A008", counterID: "C2" },
        { ticketCode: "A006", counterID: "C2" },
        { ticketCode: "B003", counterID: "C1" },
        { ticketCode: "B002", counterID: "C2" },
        { ticketCode: "C001", counterID: "C1" },
    ]);

    return (
        <Container fluid>
            <Row>
                <OQMS />
            </Row>
            <Row style={{ minHeight: "100vh" }}>
                <Col className='col-8' style={{ backgroundColor: "#31A861" }}>
                    <MSNewTicket listOfTickets={listOfTickets} />
                </Col>
                <Col className='col-4' style={{ backgroundColor: "#414141" }}>
                    <QueueHistory listOfTickets={listOfTickets} />
                </Col>
            </Row>
            <TimeAndDate />
        </Container>

    );
}

export default MainScreenWrapper;