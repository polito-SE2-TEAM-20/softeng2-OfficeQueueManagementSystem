import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import QueueItem from './QueueItem'

const QueueHistory = (props) => {
    return (
        <>
            <p class="sectionTitleRight" style={{ color: "#ffffff", marginTop: "100px" }}>Queue history</p>
            <Container className="queueItem">
            {/**
             * This is the container for the queue element. 
             */}
            <Row style={{paddingBottom: "0px"}}>
                <Col className="col-7 leftQueueHeader">
                    TICKET ID
                </Col>
                <Col className="col-5 rightQueueHeader">
                    COUNTER
                </Col>
            </Row>

        </Container>
            <QueueItem lv="A014" rv="C#1" />
            <QueueItem lv="B011" rv="C#3" />
            <QueueItem lv="A220" rv="C#1" />
            <QueueItem lv="C014" rv="C#2" />
            <QueueItem lv="A001" rv="C#2" />
            <QueueItem lv="A014" rv="C#1" />
        </>
    );
}

export default QueueHistory;