import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClientStand from './client-stand/ClientStand';
import CounterAssign from './admin-counter-assignment/CounterAssign'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import MainScreenWrapper from './main-screen/MainScreenWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mainscreen" element={<MainScreenWrapper/>} />
        <Route path="/clientstand" element={<ClientStand />} />
        <Route path="/counterassign" element={<CounterAssign />} />
      </Routes>
    </Router>
  );
}

export default App;
