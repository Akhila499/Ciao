import SendCard from "./SendCard";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";

export default function Schedule(){
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    console.log("Clicked on Schedule button");
    setShowForm(!showForm) 
    history.push('/sendcard');
  }
  const title = "Send the Card";
  const placeHolder = "Search the Img"
  return (
    <>
      {showForm ? <SendCard /> : <Button onClick = {handleClick} title = {title}/>}
    </>

  );
}