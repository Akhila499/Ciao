import Button from "./Button";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../App.css';
import FileUploadForm from "./FileUploadForm";
import classNames from "classnames";
import { useHistory } from 'react-router-dom';
import { Modal } from "react-bootstrap";

export default function AddGif(props) {
  const {userId, cardId, showGif, setShowGif} = props;

  console.log('useerid gif', userId, cardId );
  const onClick = () => {
    console.log('clicked on add Gif');
  }
  
  const title = "Add Gif";
  const [data, setData] =  useState([]) 
  const [isLoading, setIsLoading] = useState(false);
  const [isError, SetIsError] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedGif, setSelectedGif] = useState({});
  const [selectedGifId, setSelectedGifId] = useState("");
  const [selectText, setSelectText] = useState("");
  const history = useHistory();
  // const [showGif, setShowGif] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleSelectGif = (data) => {
    const { gif, id } = data
    if(!selectedGif[id]){
      const obj = {}
      obj[id] = {gif, id}
      setSelectedGif({...obj});
      setSelectedGifId(id);
    }else{
      delete selectedGif[id]
      // console.log('afterdel',gifsData);
      setSelectedGif({...selectedGif});
      setSelectedGifId('');
    }
    
    
    
  }
  console.log('testing', selectedGif);
  
  const renderGifs = () => {
    if(isLoading){
      return <div>Loading...</div>
    }
    return data.map(ele => {
      return (
        <div className={`gifs ${ele.id === selectedGifId ? "selected" : "" } `} key={ele.id} >
          <img src={ele.images.fixed_height.url} data-gif={ele.images.fixed_height.url} data-id={ ele.id } onClick={(event)=>{handleSelectGif(event.target.dataset)}}/>

        </div>
      )


    })
  }
  const renderError = () => {
    if(isError){
      return (
        <div>
          unable to get gifs. please try again in few minutes
        </div>
      )
    }
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }
  const handleSubmit = async (event) => {
      event.preventDefault()
      SetIsError(false);
      setIsLoading(true);
      console.log('eennnnnvvv', typeof process.env.REACT_APP_GIPHY_KEY);
      try{
        const results = await axios("https://api.giphy.com/v1/gifs/search",{
          params: {
            api_key: process.env.REACT_APP_GIPHY_KEY,
            q: search
          }
        })
        console.log(results);
        setData(results.data.data);
      }catch(err){
        SetIsError(true);
        setTimeout(()=>SetIsError(false), 4000)
      }
      setIsLoading(false)
      
  }
  
  const handleText = (e) => {
    setSelectText(e.target.value);
  }
  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log('@@#$tyui', cardId);
    const reactData = {selectedGif, selectText, selectedGifId, userId, cardId}
    const url = 'http://localhost:3001/api/gif/'
    let sendData = () => {
    axios.post(url, reactData)
      .then(res => console.log('data send',res))
      .catch(err => console.log('--->--',err.data))
    }
    sendData();
    window.location.reload(false);
    // setShowGif(false);
    // history.push(`/card/${cardId}`);
    // history.push(`/cards`);
  }
  return (
    <>
    <div>
      {renderError()}
    </div>
    {/* <FileUploadForm placeholder="search" onChange={handleSearchChange} value = {search}/> */}
    <br/>
    {/*  */}
    
    <form onSubmit={handlePostSubmit} className="contact-form mycontformmodal">
    <div className="form-group myformgrp">
        <input value = {search} 
          onChange = {handleSearchChange}
          type = "text"
          placeholder = "search"
          className="form-control form-controlmodal"
        />
        <button onClick={handleSubmit} type="submit" className="searchicon">Go</button>
      </div>
      <div className="form-group myformgrp">
        <textarea type="text" onChange = {handleText} placeholder = "Enter text here" className="form-control"/>
      </div>
      {/* <button type = "Submit" onClick={handlePostSubmit}>Submit</button> */}
       <button type="submit" value="Submit" className="btn btn-primary mybtncss">Submit</button> 
     </form>
    <div>
      { selectedGif[selectedGifId] &&

      <img src={selectedGif[selectedGifId].gif} />
      }
    </div>  
    <div className="apidata">{renderGifs()}</div>
    {/* <div className="">
      <button type="submit">Add Gifphy</button>
    </div> */}
      {/* <Button onClick = {onClick} title = {title}/>  */}
    </>
  )
}

