import { useState } from "react";
export default function FileUploadForm (props){
  const { placeholder, searchValue, setSearchValue, descriptionValue, setDescriptionValue } = props
  console.log('props', props);
  return (
    <form>

        <div>
          <input type="text" placeholder={props.placeholder} value={ searchValue } onChange={setSearchValue}/>
        </div>
        <div>
          <textarea type="text" placeholder ="Enter the description" value = { descriptionValue } onChange = {setDescriptionValue}/>
        </div>
        <button type="submit" onClick={props.onClick} >Submit</button>
      </form>
  );

}