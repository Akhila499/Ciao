import { Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <div>
      <h1>Navbar page</h1>
      <nav className="navbar">
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/createcard'>Create Card</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}