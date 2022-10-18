import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style/client-style.css';
import { onClickWrapper } from './OnClickClientStand'
import ClientSelection from './sounds/clientSelection.mp3'
import { Howl, Howler } from 'howler'
import { useEffect, useState } from 'react';
import API from './API/api-client-stand'

class SoundPlayClass {
    SoundPlay = (src) => {
        const sound = new Howl({ src });
        sound.play();
    }
}

const ClientStand = () => {
    const [serviceTypes, setServiceTypes] = useState([{ code: "", name: "", expectedTimeSeconds: -1 }]);

    useEffect(() => {
        const getServiceTypes = async () => {
            const serviceTypesList = await API.getServiceTypes();
            setServiceTypes(serviceTypesList);
        }
        getServiceTypes();
    }, [])

    const soundPlayClass = new SoundPlayClass()
    const audioClip = { sound: ClientSelection, name: "clientSelection.mp3" }

    useEffect(() => { Howler.volume(1.0) }, [])

    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861" }}>
            <Row>
                <p className='headerClient' style={{ fontSize: "40px", textAlign: "center", paddingTop: "20px", paddingBottom: "20px", fontFamily: "Koblenz" }}>
                    <b>Please select a service to get enqueued.</b>
                </p>
            </Row>
            <Row style={{ marginTop: "100px" }}>
                {
                    serviceTypes.map((service) => {
                        return (
                            <Col className="button hoverButton" onClick={() => { onClickWrapper(service.code); soundPlayClass.SoundPlay(audioClip.sound) }}>
                                <Row>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "15px" }} width="60" height="60" fill="currentColor" class="bi bi-bandaid" viewBox="0 0 16 16">
                                        <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z" />
                                        <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z" />
                                    </svg>
                                </Row>
                                <Row>
                                    <div style={{ textAlign: "center" }}>{service.name}</div>
                                </Row>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
}

export default ClientStand;