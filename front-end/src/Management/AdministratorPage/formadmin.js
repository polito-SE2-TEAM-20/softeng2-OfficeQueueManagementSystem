import { Container, Row, Col} from 'react-bootstrap';
import { Form, Button, Alert, Modal } from 'react-bootstrap';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const FormAssignServices = () =>{

    const [services, setServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [show, setShow] = useState('');
  const [counter, setCounter] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    let valid = true;

  };
    return (
        <Form onSubmit={handleSubmit}  style={{ marginTop: "250px" }}>
      <Form.Group className="mb-3" >
        <Form.Label>Counter#</Form.Label>
        <Form.Control type="text" placeholder="Enter counter #" />
        <Form.Text className="text-muted">
          Insert the number of the counter to assign services types
        </Form.Text>
      </Form.Group>
      <Form.Select aria-label="Default select example" size="sm">
      <option>Choose a service to assign</option>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
      
    </Form.Select>
    <Form.Select aria-label="Default select example" size="sm">
      <option>Choose a service to assign</option>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
    </Form.Select>
    <Form.Select aria-label="Default select example" size="sm">
      <option>Choose a service to assign</option>
      <option value="1">A</option>
      <option value="2">B</option>
      <option value="3">C</option>
    </Form.Select>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" onClick={()=> navigate('/administrator')}>
        Annulla 
      </Button>
      </Form>


    );
}

export default FormAssignServices;

