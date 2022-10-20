import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style/client-style.css';
import ClientSelection from './sounds/clientSelection.mp3'
import { Howl, Howler } from 'howler'
import { useEffect, useState } from 'react';
import API from './API/api-client-stand'
import Ticket from '../ticket/ticket';
import { Alert } from 'react-bootstrap';

class SoundPlayClass {
    SoundPlay = (src) => {
        const sound = new Howl({ src });
        sound.play();
    }
}

const ClientStand = () => {
    const [serviceTypes, setServiceTypes] = useState([{ code: "", name: "", expectedTimeSeconds: -1 }]);
    const [newT, setNewT] = useState({ ticketInserted: { code: "", estimatedTime: "" } });
    const [show, setShow] = useState(false);

    useEffect(() => {
        const getServiceTypes = async () => {
            const serviceTypesList = await API.getServiceTypes();
            setServiceTypes(serviceTypesList);
            console.log(serviceTypesList);
        }
        getServiceTypes();
    }, [])

    const soundPlayClass = new SoundPlayClass()
    const audioClip = { sound: ClientSelection, name: "clientSelection.mp3" }

    useEffect(() => { Howler.volume(1.0) }, [])


    function newTicket(code) {
        API.issueNewTicket(code)
            .then(newT => {
                setNewT(newT);
                setShow(true);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861" }}>
            <Row>
                <p className='headerClient' style={{ fontSize: "40px", textAlign: "center", paddingTop: "20px", paddingBottom: "20px", fontFamily: "Koblenz" }}>
                    <b>Please, select a service to get enqueued.</b>
                </p>
            </Row>
            <Row style={{ marginTop: "100px" }}>
                {
                    serviceTypes.sort((x, y) => x.code > y.code).map((service) => {
                        return (
                            <Col className="button hoverButton" onClick={() => { newTicket(service.code); soundPlayClass.SoundPlay(audioClip.sound); console.log(service.code) }}>
                                <Row>
                                    {
                                        service.code == "A" ?
                                            (<svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "15px" }} width="60" height="60" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                                                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
                                            </svg>) : <></>
                                    }
                                    {
                                        service.code == "B" ?
                                            (<svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "15px" }} width="60" height="60" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                            </svg>) : <></>
                                    }
                                    {
                                        service.code == "C" ?
                                            (<svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "15px" }} width="60" height="60" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                            </svg>) : <></>
                                    }
                                </Row>
                                <Row>
                                    <div style={{ textAlign: "center" }}>{service.name}</div>
                                </Row>
                            </Col>
                        );
                    })
                }
            </Row>

            {/*<Alert dismissible show={show} className="center" style={{ width: "fit-content" }} onClose={() => setShow(false)}>
                {console.log(newT)}
            </Alert>*/}

            <Ticket newT={newT} show={show} setShow={setShow} />

        </Container>
    );
}

export default ClientStand;