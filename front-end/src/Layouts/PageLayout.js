import { Link} from 'react-router-dom';
import {  Button } from 'react-bootstrap';

function NotFoundLayout() {
    return (
      <>
        <h2>PAGINA NON TROVATA</h2>
        <Link to="/">
          <Button variant="primary">Indietro</Button>
        </Link>
      </>
    );
  }

  export {  NotFoundLayout }; 