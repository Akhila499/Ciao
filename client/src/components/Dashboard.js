
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Dashboard (){
  const [ showRec, setShowRec] = useState(false);
  const clickHandle = () => {
    setShowRec(!showRec);
  }
  const [ showSent, setShowSent] = useState(false);
  const clickHandle1 = () => {
    setShowSent(!showSent);
  }
  return (
    <>
      <ul>
       
          <li>
            <button onClick = {clickHandle}><Link to='/received'>Received</Link></button>
          </li>
       
          <li>
            <button onClick = {clickHandle1}><Link to='/sent'>Sent</Link></button>
          </li>
      </ul>
    </>
  );
}