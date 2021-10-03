import React, { useState, useContext } from "react";
import "../../background.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

import CardContext from './CardContext';


const Background = (props) => {
  const { cardId } = props;
  const { background, setBackground} = useContext(CardContext);

  const [data, setData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [selectedBg, setSelectedBg] = useState({});
  const [selectedBgId, setSelectedBgId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, SetIsError] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getBg = () => {
    const url = `http://localhost:3001/api/bgimg/${cardId}`;
    
    axios.get(url)
      .then(res => {
        console.log('data from db about bg',res.data.bg);
        setBackground(res.data.bg);
        console.log('background',background);
        handleClose();
      })
      .catch(err => console.log('err in bg', err));
  }
  const images = [
    {
      id: 1,
      imgSrc:
        "https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg",
    },
    {
      id: 2,
      imgSrc:
        "https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg",
    },
    {
      id: 3,
      imgSrc:
        "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg",
    },
    {
      id: 4,
      imgSrc:
        "https://media.istockphoto.com/vectors/blurred-bokeh-light-on-dark-blue-background-christmas-and-new-year-vector-id1128429212?k=20&m=1128429212&s=612x612&w=0&h=3tgc_kFdN4bPi_5MAc7xQEsCBh2mHdzBOY7Y3u2reWw=",
    },
    {
      id: 5,
      imgSrc:
        "https://imgv3.fotor.com/images/gallery/feature-background-gallery-marble-ink-1.jpg",
    },
    {
      id: 6,
      imgSrc: "https://wallpaperaccess.com/full/187161.jpg",
    },
  ];

  const handleSelectImage = (data) => {
  const { img, id } = data;
   setBackground(img);
  };
   
   
    
    // if (!selectedBg[id]) {
    //   const obj = {};
    //   obj[id] = { img, id };
    //   setSelectedBg({ ...obj });
    //   setSelectedBgId(id);
      
    // } else {
    //   delete selectedBg[id];
    //   setSelectedBg({});
    //   setSelectedBgId(null);
    // }
  // };

  const renderImages = () => {
    return images.map((image) => {
      return (
        <div
        className={`bgimages ${
          image.id === selectedBgId ? "selected" : ""
        } `}
        key={image.id}>
          <img
            className = "eachBgImg"
            src={image.imgSrc}
            data-img={image.imgSrc}
            data-id={image.id}
            onClick={(event) => {
              handleSelectImage(event.target.dataset);
            }}
            alt=''
          />
        </div>
      );
    });
  };
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    SetIsError(false);
    setIsLoading(true);
    
    try {
      const results = await axios.post(`http://localhost:3001/api/bgimg`, {background, cardId});
      console.log("RESULTS: ", results);
      setData(results.data.results);
    } catch (err) { 
      console.log("THERE IS AN ERROR");
      SetIsError(true);
      setTimeout(() => SetIsError(false), 4000);
    }
    setIsLoading(false);
  };


  const handlePostSubmit = (event) => {
    event.preventDefault();
    console.log("BACKGROUND: ", background)
    handleClose();
    

    
  };


  return (
    <>
      <div className="bgListOfImages">{renderImages()}</div>
      {/* <button onClick = {handlePostSubmit}>Choose Background</button> */}
      <button onClick = {handleSubmit}>Submit</button>
      <button onClick = {getBg}>close</button>

    </>
  );

  
};

export default Background;
