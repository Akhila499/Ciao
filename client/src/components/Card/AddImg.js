import React, { useState } from "react";
import axios from "axios";
import "../../App.css";
import { useHistory } from "react-router-dom";

export default function AddImg(props) {
  const {userId, cardId, showImg, setShowImg} = props;
  const [search, setSearch] = useState("");
  const [clientId, setClientId] = useState(
    "xbh0A-ll5iy3nyH4JPGfKFHvzVYdOU_MfEaiX0U3T4I"
  );

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, SetIsError] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [selectedImageId, setSelectedImageId] = useState("");
  const [selectText, setSelectText] = useState("");
  const history = useHistory();


  const onCancel =(e)=> {
    history.push('/createcard');
  }
  const handleSelectImage = (data) => {
    const { img, id } = data;

    if (!selectedImage[id]) {
      const obj = {};
      obj[id] = { img, id };
      setSelectedImage({ ...obj });
      setSelectedImageId(id);
    } else {
      delete selectedImage[id];

      setSelectedImage({ });
      setSelectedImageId("");
    }

  };

  const renderImages = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return data.map((image) => {
      return (
        <div
          className={`images ${
            image.id === selectedImageId ? "selected" : ""
          }`}
          key={image.id}
        >
          <img
            src={image.urls.small}
            data-img={image.urls.small}
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
  const renderError = () => {
    if (isError) {
      return <div>unable to get gifs. please try again in few minutes</div>;
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    SetIsError(false);
    setIsLoading(true);
    console.log(search);
    const url = `https://api.unsplash.com/search/photos`;
    try {
      const results = await axios(url, {
        params: { query: search },
        headers: {
          Authorization:
            "Client-ID xbh0A-ll5iy3nyH4JPGfKFHvzVYdOU_MfEaiX0U3T4I",
        },
      });
      console.log("RESULTS: ", results);
      setData(results.data.results);
    } catch (err) {
      console.log("THERE IS AN ERROR");
      SetIsError(true);
      setTimeout(() => SetIsError(false), 4000);
    }
    setIsLoading(false);
  };

  const handleText = (event) => {
    setSelectText(event.target.value);
  };
  const handleImgSubmit = (event) => {
    event.preventDefault();
    console.log('clicked on add image submit');
    console.log('clicked on submit img',{selectedImage}, {selectedImageId});

    const reactData = { img: selectedImage[selectedImageId].img, selectText, userId, cardId};
    console.log('cardid cardid cardid', cardId);
    // const url = "http://localhost:3001/api/img";
    
    axios
      .post("http://localhost:3001/api/img/", reactData)
      .then((res) => console.log("data Img send", res))
      .catch((err) => console.log("--->--", err.data));
  
    
    window.location.href = `http://localhost:3000/card/${cardId}`;
    // window.location.reload(false);
    // setShowImg(false);
    // history.push("/createcard");
  }

  const handlePostSubmit = () => {
    console.log('clicked on add image submit');
    // event.preventDefault();

    // console.log('clicked on submit img',{selectedImage}, {selectedImageId});

    // const reactData = { img: selectedImage[selectedImageId].img, selectText, userId, cardId: 4};
    // console.log('cardid cardid cardid', cardId);
    // const url = "http://localhost:3001/api/img";
    // let sendData = () => {
    //   axios
    //     .post(url, reactData)
    //     .then((res) => console.log("data Img send", res))
    //     .catch((err) => console.log("--->--", err.data));
    // };
    // sendData();
    // window.location.href = `http://localhost:3000/card/${cardId}`;
    // window.location.reload(false);
    // setShowImg(false);
    // history.push("/createcard");
  };

  return (
    <>
      <div>{renderError()}</div>
      <br />
      <form onSubmit={(event) => handleImgSubmit(event)}>
        <div>
          <input
            value={search}
            onChange={handleSearchChange}
            type="text"
            placeholder="search"
          />
          <button onClick={handleSubmit} type="submit">
            Go
          </button>
        </div>
        <div>
          <textarea
            type="text"
            onChange={handleText}
            placeholder="Enter text here"
          />
       </div>
        <input type="submit" value="Submit"></input>
        {/* /* <input type="submit" value="Cancel" onClick={onCancel}></input> */}

      </form> 
      <div>
        {selectedImage[selectedImageId] && (
          <img src={selectedImage[selectedImageId].img} alt=''/>
       )}
      </div>
      <div className="apidata">{renderImages()}</div>
    </>
  );
}
