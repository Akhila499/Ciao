import Post from "./Post";
import Background from "./Background";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import CardContext from "./CardContext";
import {useParams} from "react-router-dom";
import Schedule from "./Schedule";
import Contributors from './Contributors';

export default function Card(props) { 
  const {cardId} = props;
  const [posts, setPosts] = useState([]);
  const userId = localStorage.getItem('userId')
  const [background, setBackground] = useState("https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg");
  const contextValue = { background, setBackground };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    const getgifdata = `http://localhost:3001/api/gif`;
    console.log('hello tesgskjdfh');
    const userId = localStorage.getItem('userId')
    console.log('!!!&&&!!!', userId);
    // const reactinfo = {userId}
    const params = {userId}
    axios.get(getgifdata, {params, withCredentials: true})
    .then((response) => {
      console.log('d',response.data.posts);
      setPosts(response.data.posts);
    })
    axios.get("http://localhost:3001/api/fetchData")
     .then((response) => {
      console.log('ppppppp+++', response.data.posts);
       setPosts(response.data.posts);
     })
  }, []);
  console.log('posttesting', posts);

  return (
    <>
     
      {posts.map(post => {
          
          return (
         <div>  
           {
             !post.video? null : (
              <Video key={post.id} video={post}/>       
             )
           } 

           {
             !post.gif? null : (
             <Gif key={post.id} post={post}/> 
            )
           }       

          {
             !post.image? null : (
              <Image key={post.id} image={post}/>
              )
           } 
    
          <Text key={post.id} text={post} />
          </div>
          )
        }
        )}
      
    </>
  );
}

const Gif = (props) => {
  const {post}=props;
  return (
   
  <div className='testinggg'>
    <img src={post.gif} alt=""/>
  
  </div>  

  )
}

const Video = ({video}) => {
return(
  <video width="320" height="240" controls>
  <source src={video.video} type="video/mp4" />
</video>

)
}

const Image = ({image}) => {
  return (
  <div>
  
  <img alt="" src={image.image} />
  

</div>
  )
}
const Text = ({text}) => {
  return(
<div>
  <p>{text.text}</p>
</div>
  )
}