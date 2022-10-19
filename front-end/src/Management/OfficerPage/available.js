import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';
import API from '../API/api_officer'
import { Alert } from 'react-bootstrap';



const Available = (props) => {
    // available ==>  onclick update mainscreen taking form the longest queu from the services available at this counter
    const [available, setAvailable] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [nextInTheQueue, setNextInTheQueue] = useState();

  const [show, setShow] = useState(false);


    function declareAvailable(c) {
        API.declareAvailability(c)
            .then(nextInTheQueue => {
                setAvailable(true);
                if (nextInTheQueue == null) {
                    setErrorMessage('nobody waiting');
                    setShow(true);
                    setNextInTheQueue();
                } else {
                    setNextInTheQueue(nextInTheQueue);
                    setErrorMessage('');
                    setShow(false);
                    console.log(nextInTheQueue);
                }

            })
            .catch(err => {
                setErrorMessage(err);
                console.log(err);
            })
    }

    return (
        <Container fluid >
            <Row style={{ marginTop: "250px" }}>

            <Alert
            dismissible
            show={show}
            onClose={() => setShow(false)}
            variant="info">
            {errorMessage}
          </Alert>
                <Col >
                    <button className="button hoverButton" onClick={() => declareAvailable(props.user.counterId)} >Available</button>
                </Col>
                <Col >
                    <div className="newTicketBox">
                        <div className="newTicketText" >
                            {/* should be user.counter*/}
                            Counter {props.user.counterId} C#{props.user.counterId}
                        </div>
                        <div>
                            SERVICES ASSIGNED: A B C
                        </div>
                    </div>

                </Col>
            </Row>

        </Container>
    )
}
export default Available;