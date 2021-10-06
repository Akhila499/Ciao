// import Button from "./Button";
import { useState } from "react";
import {Form, Button }from 'react-bootstrap';
import axios from "axios";
import { useHistory } from "react-router-dom";



export default function AddVideo(props) {
  const {cardId, userId} =props;
  const [file, setFile] = useState("");
  const [fileName, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const history = useHistory();
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  // const onClick = () => {
  //   console.log("clicked on add video");
  // };
  // const title = "Add Video"
 
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append('cardId', cardId);
    formData.append('userId', userId);

    
     
    try {
      const url = "http://localhost:3001/api/uploads";
      // const reactData = {cardId, userId};
      // console.log('reactdata in video', reactData);
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err) {
        console.log("there was an error");
      } else {
        console.log(err.response.data.msg);
      }
    }
    // history.push("/createcard");
    window.location.reload(false);
  };

  
  return (
    <>
      {/* <Button onClick={onClick} title = {title}/> */}
      <Form onSubmit={onSubmit} className="contact-form mycontformmodal">
      <Form.Group controlId="formFile" className="mb-3" >
      {/* <form > */}
        <div className="custom-file form-group myformgrp">
          <Form.Control
            type="file"
            // className="custom-file-input"
            onChange={onChange}
          />
          <Form.Label className="custom-file-label" >
            {fileName}
          </Form.Label>
        </div>
        <div>
        <button type="submit" value="Upload" class="btn btn-primary mybtncss">Upload</button>
        </div>
        {/* <Form.Control type="submit" value="Upload" className="mybtncss" /> */}
       
      </Form.Group> 
      </Form>
    </>
  );
}
