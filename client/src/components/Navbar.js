import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/tooplate-style.css';
import '../slick/slick.css';
import '../slick/slick-theme.css'
import {Navbar, Button,Nav,Container} from 'react-bootstrap';
export default function Navbarpage(props) {
  const { loginStatus, firstName, setLoginStatus, userId, sentCards} = props;
  const history = useHistory();
  const loggedOut = () => {
    console.log('clicked on testing');
    const url = 'http://localhost:3001/api/logout/';
    axios.get(url, {withCredentials: true})
    .then(res => {
      console.log('login details send', res);
      setLoginStatus(false);
      localStorage.removeItem('userId');
    })
    .catch(e => console.log('err', e))
    history.push('/');
  }
  


  return (
    <div>
      <Navbar className="nav-color navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ciao</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createcard">Create Card</Nav.Link>
            {loginStatus &&
                    <>
                    
                    {/* <li>logged in as -- {firstName}</li> */}
                    <Nav.Link href='/sent/' onClick={sentCards}>List</Nav.Link>
                  <Nav.Link  variant="outline-dark" onClick={loggedOut}>Logout</Nav.Link>
                  <Navbar.Text>
                  logged in as: {firstName}
                  </Navbar.Text>
                  </>
                  }
                  {!loginStatus &&
                    <>
                      <Nav.Link href='/login'>Login</Nav.Link>
                      <Nav.Link href='/signup'>SignUp</Nav.Link>
                    </> 
                  }
          </Nav>
        </Container>
      </Navbar>
   
      {/* <nav className="navbar">
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/createcard'>Create Card</Link></li>
            {loginStatus &&
              <>
              <li>logged in as -- {firstName}</li>
              <li><Link to='/sent/' onClick={sentCards}>List</Link></li>
              <li><Link onClick={loggedOut}>Logout</Link></li>
              </>
            }
            {!loginStatus &&
              <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
              </> 
            }
            
          </ul>
        </div>
      </nav> */}
    </div>
  );
}