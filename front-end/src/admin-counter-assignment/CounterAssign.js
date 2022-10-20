import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import './style/acastyle.css'
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import API from './API/api-counter-assignment'

const CounterAssign = () => {

    const fakeServiceTypes = [
        { code: "A", name: "Service A" },
        { code: "B", name: "Service B" },
        { code: "C", name: "Service C" },
        { code: "D", name: "Service D" },
        { code: "E", name: "Service E" },
    ]

    const fakeCounters = [
        { counterCode: "1", counterName: "Counter 1" },
        { counterCode: "2", counterName: "Counter 2" },
        { counterCode: "3", counterName: "Counter 3" },
        { counterCode: "4", counterName: "Counter 4" },
        { counterCode: "5", counterName: "Counter 5" },
        { counterCode: "6", counterName: "Counter 6" },
    ]

    const fakeCountersToServiceTypes = []

    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861", paddingLeft: "30px", paddingTop: "30px" }}>
            <Row className="headerServiceTypesAssignment">
                <div style={{ fontFamily: "Akira", fontSize: "50px" }}>Service Types assignment</div>
            </Row>
            
            <Row style={{ marginTop: "120px", paddingLeft: "60px" }}>
                <Row>
                    <div className="category">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <div className="align-middle" style={{ display: "inline", paddingLeft: "18px", fontSize: "50px" }}><b>PICK A COUNTER</b></div>
                    </div>
                </Row>
                <Row style={{ paddingTop: "10px", paddingLeft: "45px" }}>
                    <Form.Select aria-label="Default select example" style={{ width: "fit-content" }}>
                        <option>Select a counter...</option>
                        {
                            fakeCounters.map((counter) => {
                                return (
                                    <option value="1">{counter.counterName}</option>
                                );
                            })
                        }
                    </Form.Select>
                </Row>
            </Row>

            <br></br>
            <br></br>
            <br></br>
            <Row style={{ paddingLeft: "60px" }}>
                <Row>
                    <div className="category">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <div className="align-middle" style={{ display: "inline", paddingLeft: "18px", fontSize: "50px" }}><b>SET ITS SERVICE TYPES</b></div>
                    </div>
                </Row>
                <Row>
                    <div className='box'>
                        {
                            fakeServiceTypes.map((service) => {
                                return (
                                    <>
                                    <Form.Check
                                        id={`${service.code}`}
                                        label={`${service.name}`}
                                    />
                                    <hr style={{marginTop: "5px", marginBottom: "5px"}}></hr>
                                    </>)
                            })
                        }
                    </div>
                </Row>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Col>
                <div style={{ display: "flex", justifyContent: "end", marginRight: "70px" }}>
                    <Button variant="danger" style={{ marginRight: "10px", width: "140px", fontSize: "28px" }}>Cancel</Button>
                    <Button variant="primary" style={{ marginRight: "10px", width: "140px", fontSize: "28px" }}>Save</Button>
                </div>
            </Col>
        </Container>
    );
}

export default CounterAssign;