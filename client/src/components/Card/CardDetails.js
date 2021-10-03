import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Post from './Post';
import AddGif from "./AddGif";
import AddImg from "./AddImg";
import AddVideo from "./AddVideo";
import SendCard from "./SendCard";
import ContributorForm from "./ContributorForm";
import Background from "./Background";
import CardContext from './CardContext';
import { Modal, Button } from "react-bootstrap";
import '../../background.css';

export default function CardDetails(props) {
  const [background, setBackground] = useState('');
  const contextValue = { background, setBackground };
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {cardId} = useParams();
  const [cardDetails,setCardDetails] = useState([]);
  const [showGif, setShowGif] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [showContri, setShowContri] = useState(false);
  const [showBg, setShowBg] =useState(false);

  const [data, setData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [selectedBg, setSelectedBg] = useState({});
  const [selectedBgId, setSelectedBgId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, SetIsError] = useState(false);

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  const [title, setTitle] = useState('');
  const userId = localStorage.getItem('userId');

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

  const getDetails = () => {
   
    const url = 'http://localhost:3001/api/card/'+cardId
    
    axios.get(url)
      .then(res => {
        console.log('carddetails', res)
        setCardDetails(res.data);
        setTitle(res.data.title);
      })
      .catch(err => console.log('->-->--',err.data))
  }
  const getBg = () => {
    const url = `http://localhost:3001/api/bgimg/${cardId}`;
    
    axios.get(url)
      .then(res => {
        console.log('data from db about bg',res.data.bg);
        setBackground(`${res.data.bg}`);
        console.log('background',background);
        // handleClose();
      })
      .catch(err => console.log('err in bg', err));
  }
  const handleSelectImage = (data) => {
    const { img, id } = data;
     setBackground(img);
    };
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
  
  
  useEffect(()=>{
    getDetails();
    getBg();
    

  },[])
  const handleClick1 = () => {
    setShowGif(!showGif);
  }
  const handleClick2 = () => {
    setShowImg(!showImg);
  }
  const handleClick3 = () => {
    setShowVideo(!showVideo);
  }
  const handleSend = () => {
    // return {<SendCard cardId={cardId}/>}
    setShowSend(!showSend);
  }
  const handleContri = () => {
    setShowContri(!showContri);
  }
  const handleBg = () => {
    setShowBg(!showBg);
  }
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

  return (
    <>
     <CardContext.Provider value={contextValue}>
      {/* <p>This is bg url: {background}</p> */}
    <div
    className="background-image"
      style={{
       backgroundImage: `url(${background})` ,
       backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
     }}
    >
      <h1>Posts created</h1>
      <Button variant="primary" onClick={handleShow}>
        Choose Background
      </Button>
      {/* <Post cardId={cardId} userId={userId}/>
      <Schedule />
      <Contributors cardId={cardId}/> */}
      <Modal size="sm" className="bgModal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className = "bgTitle">Background</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className = "bgMenu">
            {/* <Background cardId={cardId} setBackground={setBackground}/> */}
            <div className="bgListOfImages">{renderImages()}</div>
              {/* <button onClick = {handlePostSubmit}>Choose Background</button> */}
              <button onClick = {handleSubmit}>Submit</button>
              <button onClick = {getBg}>close</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>


    <button onClick={handleClick1}>Add Gif</button>
    <button onClick={handleClick2}>Add Img</button>
    <button onClick={handleClick3}>Add video</button>
    <button onClick={handleSend}>Send</button>
    <button onClick={handleContri}>Add Contributor</button>
    {/* <button onClick={handleBg}>Add Background</button> */}
    {showGif && <AddGif cardId={cardId} userId={userId} showGif={showGif} setShowGif={setShowGif}/>}
    {showImg && <AddImg cardId={cardId} userId={userId} setShowImg={setShowImg} showImg={showImg}/>}
    {showVideo && <AddVideo cardId={cardId} userId={userId}/>}
    {showSend && <SendCard cardId={cardId}/> }
    {showContri && <ContributorForm cardId={cardId}/> }
    {showBg && <Background setBackground={setBackground}/>}
      {cardDetails.map(post => (
       
       
        <div key={post.id}>
          
          {post.gif && <img src={post.gif}/>}
          {post.image && <img src={post.image}/>}
          {post.video && <video width="320" height="240" controls>
            <source src={post.video} type="video/mp4" />
          </video>}
          
          <p>{post.text}</p>
          <p>Created By:{post.first_name}</p>
        </div>
        
      ))
      
      }



      </div>
    </CardContext.Provider>
    </>
  );

}
