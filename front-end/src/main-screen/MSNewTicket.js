import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MSNewTicket = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div class="sectionTitle header" style={{ marginTop: "100px" }}>Last called ticket</div>
                    </Col>
                </Row>
            </Container>
            <div class="newTicketBox center">
                <div class="newTicketText">
                    A074
                </div>
                <div style={{ color: "#ffffff" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </div>
                <div class="newTicketText">
                    Counter 7 (C#7)
                </div>
            </div>
        </>
    );
}

export default MSNewTicket;