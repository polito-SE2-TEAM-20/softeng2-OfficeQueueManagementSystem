import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClientStand from './client-stand/ClientStand';
import Client from './client-stand/Client';
import { LoginForm } from './Login/Login';
import { NotFoundLayout } from './Layouts/PageLayout';
import API from './API';
import Officerpage from './Management/OfficerPage/officerpage';
import Ticket from './ticket/ticket';
import Managementpage from './Management/managementpage';
import {useState } from 'react';
import CounterAssign from './admin-counter-assignment/CounterAssign'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Navigate,
  useNavigate
} from "react-router-dom";
import MainScreenWrapper from './main-screen/MainScreenWrapper';

function App() {
  return (
    <Router>
      <App2 />
    </Router>
  )
}

function App2() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const doLogIn = (credentials) => {
        API.logIn(credentials)
          .then(user => {
            setLoggedIn(true);
            setUser(user);
            setMessage('');
            console.log(user);
            if(user.role){
              navigate('/counterassign');
            }else{
              navigate('/officer');
            }
            
          })
          .catch(err => {
            setMessage(err);
            console.log(err);
          }
          )
      }
    
      const doLogOut = async () => {
        await API.logOut();
        setLoggedIn(false);
        setUser({});
        console.log(user);
        console.log(localStorage);
        navigate('/management');
      }

  return (
    <>
      <Routes>
        <Route path="/mainscreen" element={<MainScreenWrapper/>} />
        <Route path="/clientstand" element={<ClientStand />} />
        <Route path="/client" element={<Client/>} />
        <Route path="/counterassign" element={<CounterAssign />} />
        <Route path = "/login" element={<LoginForm login={doLogIn} user={user} logout={doLogOut} message={message}/>}></Route>
        <Route path = '/officer' element = {<Officerpage user={user}  logout={doLogOut}/>}/>
        <Route path = '/management' element = {<Managementpage />}/>
        <Route path = '/ticket' element = {<Ticket />}/>
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
      </>
  );
}

export default App;
