import "./styles.css";
import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Modal } from 'react-bootstrap';

const Ticket = (props) => {
    const navigate = useNavigate();
    return (
        <div hidden={!props.show}>
            <div class="container bootstrap snippets bootdeys">
                <div class="row">
                    <div class="content-card">
                        <div class="card-big-shadow">
                            <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                <div class="content">
                                    <h6 class="category center" style={{ fontFamily: "Akira", color: "black" }}>TICKET</h6>
                                    <h4 class="title" style={{ color: "black", fontFamily: "Akira", fontSize: "36px", marginBottom: "48px" }}><b>{!props.newT?.ticketInserted ? "" : props.newT.ticketInserted.code}</b></h4>
                                    <p class="description" style={{ marginTop: "24px" }}>Expected time:</p>
                                    <p class="description" style={{ fontSize: "25px" }}><b>{!props.newT?.ticketInserted ? "" : props.newT.ticketInserted.estimatedTime}</b></p>
                                    <Button style={{marginTop: "24px"}} variant="outline-secondary" onClick={() => props.setShow(false)}>Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;