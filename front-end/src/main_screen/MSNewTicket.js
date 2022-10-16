import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MSNewTicket = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div class="sectionTitle header" style={{marginTop: "100px"}}>Last called ticket</div>
                    </Col>
                </Row>
            </Container>
            <div class="newTicketBox center">
                <div class="newTicketText">
                    A074
                </div>
                <div style={{ color: "#ffffff" }}>
                    served by
                </div>
                <div class="newTicketText">
                    Counter 7 (C#7)
                </div>
            </div>
        </>
    );
}

export default MSNewTicket;