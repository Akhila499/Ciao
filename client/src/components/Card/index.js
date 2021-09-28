import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Card() { 
  const [posts, setPosts] = useState([]);


  useEffect(()=>{
    const getgifdata = `http://localhost:3001/api/gif/`;
    axios.get(getgifdata)
    .then((response) => {
      console.log('!!!!!!',response);
      setPosts(response.data.posts);
    })

    
  }, []);
  console.log('posttesting', posts);

  return (
    <div>
      <h1>Card page</h1>
      
      <Post />
      <div>
        {posts.map(post=>(
          <div key={post.id}>
            <img src={post.text}/>
            <p>
              {post.gif}
            </p>
          </div>
        ) )}
      </div>
    </div>
  );
}