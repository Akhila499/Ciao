import Button from "./Button";
import Form from "./Form";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Post() {
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    console.log("Clicked on the new post button");
    setShowForm(!showForm) 
    history.push('/form');
  }
  const title = "New Post";
  const placeHolder = "Search the Img"
  return (
    <>
      {showForm ? <Form placeHolder = {placeHolder} /> : <Button onClick = {handleClick} title = {title}/>}
    </>

  );
}