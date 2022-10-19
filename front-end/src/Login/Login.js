import { Form, Button, Alert, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginForm(props) {
  const [username, setUsername] = useState('jerrypearson');
  const [password, setPassword] = useState('123');
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    const credentials = { username, password };
    let valid = true;
    if (username === '' || password === '') {
      valid = false;
      setShow(true);
    }
    if(valid)
    {
        props.login(credentials);
      }else{
        setErrorMessage('Username and password cannot be empty');
        setShow(true)
    }
  };


  return (
    <Modal centered show animation={false}> 
      <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert
            dismissible
            show={show}
            onClose={() => setShow(false)}
            variant="danger">
            {errorMessage}
          </Alert>
          <Form.Group controlId="username">
            <Form.Label>username</Form.Label>
            <Form.Control
              type = "text"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Login</Button>
          <Button variant="outline-secondary" onClick={()=> navigate('/')}>Annulla</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}


function LoginButton() {
    const navigate = useNavigate();
    return(
        <Button type="button" class="btn btn-primary btn-lg" onClick={()=> navigate('/login')}>Login</Button>
    )
  }

function LogoutButton(props) {
  return(
    <Button type="button" class="btn btn-primary btn-lg" onClick={props.logout}>Logout</Button>
  )
}

export { LoginForm, LogoutButton, LoginButton };