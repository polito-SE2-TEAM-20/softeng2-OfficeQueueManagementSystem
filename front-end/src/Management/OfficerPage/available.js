import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Available = (props) => {
    // available ==>  onclick update mainscreen taking form the longest queu from the services available at this counter
    return (
        <Container fluid >
            <Row style={{ marginTop: "250px" }}>
            <Col col-3>
                    <button  className="button hoverButton" >Available</button>
                </Col>
                <Col col-5>
                    <div class="newTicketBox"> 
                        <div class="newTicketText" >
                            Counter 7 (C#7)
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