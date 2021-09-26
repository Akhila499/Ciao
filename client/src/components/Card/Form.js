import Button from "./Button";
import AddImg from "./AddImg";
import AddVideo from "./AddVideo";
import AddGif from "./AddGif";
import FileUploadForm from "./FileUploadForm";
import { useEffect, useState } from "react";
export default function Form(props) {
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
      <button type="button" onClick={() => handleClick("image")}>
        add image
      </button>
      <button type="button" onClick={() => handleClick("gif")}>
        add gif
      </button>
      <button type="button" onClick={() => handleClick("video")}>
        add video
      </button>
      
      {inputType && (
        <FileUploadForm
          searchValue={searchValue}
          setSearchValue={(event) => {
            setSearchValue(event.target.value);
          }}
          descriptionValue={descriptionValue}
          setDescriptionValue={(event) => {
            setDescriptionValue(event.target.value);
          }}
          placeholder=""
          onClick={onClick}
        />
      )}
    </>
  );
}
