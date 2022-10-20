
import "./styles.css";
import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Modal } from 'react-bootstrap';

const Ticket = (props) => {
    const navigate = useNavigate();
    return (
        <div class="container bootstrap snippets bootdeys">
            <div class="row">
                <div class="content-card">
                    <div class="card-big-shadow">
                        <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                            <div class="content">
                                <h6 class="category center" style={{fontFamily: "Akira"}}>TICKET</h6>
                                <h4 class="title" style={{color: "black", fontFamily: "Akira", fontSize: "36px", marginBottom: "48px"}}><b>A0001</b></h4>
                                <p class="description" style={{marginTop: "24px"}}>Expetcted time:</p>
                                <p class="description" style={{fontSize: "25px"}}><b>15 minutes</b></p>
                                <Button style={{marginTop: "24px"}} variant="outline-secondary" onClick={() => navigate('/clientstand')}>Close</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Ticket;