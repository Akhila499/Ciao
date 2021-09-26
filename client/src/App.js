
import './App.css';
import useApplicationData from './hooks/useApplicationData';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from './components/Card';

function App() {
  const {
    state,
    dispatch
  } = useApplicationData();
    const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li> ));
  return (
    <Router>
      <div className="App" >
        <Navbar/>
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
            <Card />
          </Route>
        </Switch>

      </div >
    </Router>
  );
}

export default App;
