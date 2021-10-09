import Button from "./Button";
import AddImg from "./AddImg";
import AddVideo from "./AddVideo";
import AddGif from "./AddGif";
import Text from "./text";
import FileUploadForm from "./FileUploadForm";
import { useEffect, useState } from "react";


export default function Form(props) {
  const {userId, setUserId, setCardId, cardId, firstName} = props;
  console.log('userid form', userId);
  const [searchValue, setSearchValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [inputType, setInputType] = useState("");

  const handleClick = (type) => {
    setInputType(type);
    setSearchValue("");
    setDescriptionValue("");

  };
  const onClick = (event) => {
    event.preventDefault();
    console.log('testing', event);
  }
  // useEffect(() => {
  //   console.log('input type',inputType)
  //   setSearchValue("")
  //   setDescriptionValue("")
  // }, [inputType]);
  return (
    <>
    <div>
      <button type="button" onClick={() => handleClick("image")}>
        add image
      </button>
      <button type="button" onClick={() => handleClick("gif")}>
        add gif
      </button>
      <button type="button" onClick={() => handleClick("video")}>
        add video
      </button>
      </div>
      {inputType !== 'image' && inputType!=='gif'&& inputType !== 'video' && (
      <Text />
      )}
      {inputType === 'video' && (
        <AddVideo />
      )}
      {inputType === 'gif' && (
        
        <AddGif userId={userId} setCardId={setCardId} cardId={cardId} firstName={firstName}/>
      )}

      {inputType === 'image' && (
              <AddImg />
      )}
    </>
  );
}
