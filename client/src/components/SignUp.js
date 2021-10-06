export default function SignUp() {
  
  
  return (
    <>
      <h1>SignUp page</h1>
      <div className="row">
       
           
            <form onSubmit={handleRegisterSubmit} className="contact-form mycontform" style={{width: "40rem"}}>
              <div className="form-group myformgrp">
                <input
                  type="text"
                  placeholder = "Please enter your firstname"
                  onChange = {e => setRegFirstName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group myformgrp">
                <input
                  type="text"
                  placeholder = "Please enter your lastname"
                  onChange = {e => setRegLastName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group myformgrp">
                <input
                  type="text"
                  placeholder = "Please enter your email"
                  onChange = {e => setRegEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group myformgrp">
                <input
                  type="text"
                  placeholder = "Please enter your password"
                  onChange = {e => setRegPass(e.target.value)}
                  className="form-control"
                />
              </div>
              <button type="submit" value="Sign Up" class="btn btn-primary mybtncss">Sign Up</button>
                
            </form>
          
      </div>
    </>
  );
}