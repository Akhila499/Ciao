import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import '../css/tooplate-style.css';


export default function Login(props) {
  const { setLoginStatus, setFirstName, setUserId } = props;
  const history = useHistory();
  const [logEmail, setLogEmail] = useState('');
  const [logPass, setLogPass] = useState('');
  
  
  return (
    <>
      
          <div className="row">
            <div className = "col-xs-12 col-sm-12  col-lg-3 col-xl-3 mt-3 "></div>
            <div className="col-xs-12 col-sm-12  col-lg-6 col-xl-5 mt-3 ">
              <div className="">
                <form onSubmit={handleLoginSub} className="contact-form mycontform">
                  <div className="form-group myformgrp">
                    <input
                      type="text"
                      placeholder = "Please enter your email"
                      onChange = {e => setLogEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group myformgrp">
                    <input
                      type="password"
                      placeholder = "Please enter your password"
                      onChange = {e => setLogPass(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <button type="submit" value="Login" class="btn btn-primary mybtncss">Login</button>
                </form>
              </div>
            </div>
          </div>
        

      
      {/* <h1>{loginStatus}</h1> */}
    </>
  );
}