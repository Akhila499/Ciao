import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


export default function SendCard(props){
  
  const history = useHistory();  
  const cardUrl = props.cardId ? `http://localhost:3000/card/${props.cardId}`: '';
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState(cardUrl);
  const [email, setEmail] = useState({});

  const sendEmail = () => {
    const url = 'http://localhost:3001/api/email/';
    const reactData = {recipient, sender, subject, text}
    axios.post(url, reactData)
    .then(res => {
      console.log('email send');
      console.log(res)
    })
      .catch(err => console.log('--->--',err.data))
      
      history.push(`/card/${props.cardId}`);
  }
  
 
  // if(props.cardId){
  //   setText(`http://localhost:3000/card/${props.cardId}`);
  // }

  
  return (
    <div className="contact-form mycontformmodal">
      
          
          <label> Recipient Email</label>
          <br />
          <div className="form-group myformgrp">
            <input value={recipient}
            onChange={e => setRecipient(e.target.value)} 
            className="form-control form-controlmodal"
            />
            
          </div>
          <label> Sender Email</label>
            <br />
          <div className="form-group myformgrp">
            
            <input value={sender}
              onChange={e => setSender(e.target.value) } 
              className="form-control form-controlmodal"
              />
          </div>
          <div className="form-group myformgrp">
            <label> Subject </label>
            <br />
            <input value={subject}
              onChange={e => setSubject(e.target.value)} 
              className="form-control form-controlmodal"
              />
          </div>
          {/* <label> Message </label> */}
          {/* <br /> */}
          {/* <textarea rows={3} value={text} 
            onChange={e => setText(e.target.value)} >Hello</textarea>
          <div  /> */}
          <button onClick={sendEmail} class="btn btn-primary mybtncss"> Send Email </button>
        </div>
    
  );
}