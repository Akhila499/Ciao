
import './App.css';
import useApplicationData from './hooks/useApplicationData';
import './background.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Form from './components/Card/Form';
import { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from './components/Card';
import SendCard from './components/Card/SendCard';
import NewCard from './components/NewCard';
import Post from './components/Card/Post';
import { useState } from "react";
import Sent from './components/Sent';
import Received from './components/Received';
import axios from 'axios';
import CardDetails from './components/Card/CardDetails';
import Contributors from './components/Card/Contributors';
import {Container} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// axios.defaults.withCredentials = true;

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [ firstName, setFirstName] = useState('');
  const [ userId, setUserId ] = useState('');
  const [ cardId, setCardId ] = useState('');
  const [ sentCardsArr, setSentCardsArr] = useState([]);
  // const { id } = useParams();
  

  const checkLoggedIn = () => {
    console.log('clicked on testing');
    const url = 'http://localhost:3001/api/login/';
    axios.get(url, {withCredentials: true})
    .then(res => {
      console.log('login details send------', res.data.id);
      setLoginStatus(true);
      setFirstName(res.data.firstName);
      setUserId(res.data.id);
      localStorage.setItem('userId',res.data.id);

      console.log('%%%',userId);
    })
    .catch(e => {
      setLoginStatus(false);
      setFirstName('');
      console.log('buggggg');
    })
  }
  



  const {
    state,
    dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li> ));
  return (
    <Router>
       
    
      <div className="App" >
      
     
        <Navbar loginStatus = {loginStatus} firstName={firstName} setLoginStatus={setLoginStatus} userId={userId} />
        {/* <h1> Users </h1> */}
        {/* <ul> {userList} </ul> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/createcard">
          {/* <Route path='/cards/:id'> */}
            <NewCard loginStatus = {loginStatus} userId={userId} setCardId={setCardId} cardId={cardId}/>
          </Route>
        </Switch>
       
      </div >



      
    </Router>
  );
}

export default App;
