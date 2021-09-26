import { useState } from "react";
import Button from "./Button";


export default function AddImg(props) {
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    console.log('clicked on add img');
    setShowInput(!showInput);
  }
  const title = "Add Img";
  return (
    <>
      <div>
        <Button onClick = {handleClick} title={title}/>
      </div>
      {/* {
        showInput &&
        
      } */}
    </>
  )
}