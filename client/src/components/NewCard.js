import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {useParams} from "react-router-dom";
export default function NewCard (props) {
  
  const { loginStatus, userId, setCardId } = props;
  console.log('propropriopo',props)
  const [title, setTitle] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const history = useHistory();

  const handleCardSubmit = async (event)  => {
    event.preventDefault();
    const url = 'http://localhost:3001/api/newcard/';
    console.log('userid', userId);
    const reactData = {title, fName, lName, email, userId }
    await axios.post(url, reactData)
    .then(res => {
      console.log('card details send', res);
     
      setCardId(res.data.cardId);
      history.push(`/card/${res.data.cardId}`);
    })
    .catch(err => console.log('--->--',err.data))

    
    // history.push('/post');  
    // history.push('/sent');  

    
  }
  
  

  return (
    <>
    
      <div className="row bgcard">
        <div className = "col-xs-12 col-sm-12  col-lg-3 col-xl-3 mt-3 "></div>
          <div className="col-xs-12 col-sm-12  col-lg-6 col-xl-5 mt-3 ">
      { loginStatus && 
        <form onSubmit={handleCardSubmit} className="contact-form mycontform">
          <h4 className='heading'>Create New Card</h4>
          <div className="form-group myformgrp">
            <input
              type="text"
              placeholder = "Please enter the title of the card"
              onChange = {e => setTitle(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group myformgrp">
            <input
              type="text"
              placeholder = "Please enter the firstname of the recipent"
              onChange = {e => setFName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group myformgrp">
            <input
              type="text"
              placeholder = "Please enter the lastname of the recipent"
              onChange = {e => setLName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group myformgrp">
            <input
              type="text"
              placeholder = "Please enter the email of the recipent"
              onChange = {e => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" value="Create New Card" class="btn btn-primary mybtncss">Create</button>
          {/* <input type="submit" value="Create New Card"></input> */}
        </form>   
      
      }
      {!loginStatus && 
        <p>Please Login inorder to create a card</p>
      }
      </div>
    </div>
    </>
  );
}

