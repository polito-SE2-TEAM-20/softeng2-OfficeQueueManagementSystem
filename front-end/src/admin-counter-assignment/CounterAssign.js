import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react';

const CounterAssign = () => {

    const fakeServiceTypes = [
        { code: "A", name: "Service A" },
        { code: "B", name: "Service B" },
        { code: "C", name: "Service C" },
        { code: "D", name: "Service D" },
        { code: "E", name: "Service E" },
    ]

    const fakeCounters = [
        { counterCode: "1", counterName: "Counter 1"},
        { counterCode: "2", counterName: "Counter 2"},
        { counterCode: "3", counterName: "Counter 3"},
        { counterCode: "4", counterName: "Counter 4"},
        { counterCode: "5", counterName: "Counter 5"},
        { counterCode: "6", counterName: "Counter 6"},
    ]

    return (
        <Container fluid style={{ minHeight: "100vh", backgroundColor: "#31A861" }}>
            
        </Container>
    );
}

export default CounterAssign;