
import "./styles.css";
import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Modal } from 'react-bootstrap';

const Ticket = () => {
    const navigate = useNavigate();
    return (
        <div class="container bootstrap snippets bootdeys">
<div class="row">
    <div class="content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div class="content">
                    <h6 class="category">TICKET</h6>
                    <h4 class="title">A0001</h4>
                    <p class="description">Expetcted time:</p>
                    <p class="description">15 minutes</p>

          <Button variant="outline-secondary" onClick={()=> navigate('/clientstand')}>Close</Button>
                    
                </div>
            </div> 
        </div>
    </div>
    </div>
    </div>
    
    
    );
}

export default Ticket;