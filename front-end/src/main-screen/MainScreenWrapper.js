import MSNewTicket from './MSNewTicket';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import TimeAndDate from './TimeAndDate'
import QueueHistory from './QueueHistory';
import OQMS from './OQMS';
import API from './API/api-main-screen';
import { useState, useEffect } from 'react'

const MainScreenWrapper = () => {
    const [listOfTickets, setListOfTickets] = useState([]);

    useEffect(() => {
        const sectionCodeWrapper = setInterval(() => {
            const getLastFiveTickets = async () => {
                const listOfTickets = await API.getLastFiveTickets();
                setListOfTickets(listOfTickets.tickets);
                console.log(listOfTickets)
            }
            getLastFiveTickets();
        }, 1000);
        return () => {
            clearInterval(sectionCodeWrapper)
        }
    }, [])

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