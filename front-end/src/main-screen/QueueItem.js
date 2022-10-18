import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const QueueItem = (props) => {
    return (
        <Container className="queueItem">
            {/**
             * This is the container for the queue element. 
             */}
            <Row style={{paddingBottom: "0px"}}>
                <Col className="col-7 leftQueueItem">
                    {props.lv}
                </Col>
                <Col className="col-5 rightQueueItem">
                    {props.rv}
                </Col>
            </Row>

        </Container>
    );
}

export default QueueItem;