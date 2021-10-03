import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap'

export default function Text(props){
const [selectText, setSelectText] = useState("");

const history = useHistory();

const handleText = (e) => {
  setSelectText(e.target.value);
}
const handlePostSubmit = (e) => {
  e.preventDefault();
  console.log('@@#$tyui');
  const reactData = {selectText}
  const url = 'http://localhost:3001/api/text/'
  let sendData = () => {
    axios.post(url, reactData)
      .then(res => console.log('data send'))
      .catch(err => console.log('--->--',err.data))
    }
    sendData();
    history.push('/createcard');
  }

  const onCancel =(e)=> {
    history.push('/createcard');
  }
return(
// {/* <div>
//   <form>
// <textarea type="text" onChange = {handleText} placeholder = "Enter Message here" /> 
// <div>
//  <button type="button" onClick={handlePostSubmit}> Post</button>
//   <button>Cancel</button>
// </div>
// </form>
// </div> */}
<>
<Form>
    <Form.FloatingLabel controlId="floatingTextarea2" className="mb-3" label="Message">
    <Form.Control
      as="textarea"
      onChange = {handleText}
      placeholder="Enter Message here"
    
    />
 </Form.FloatingLabel>
<div>
  {/* <button type="button" onClick={handlePostSubmit}> Post</button> */}
 <Button 
 variant="outline-primary" onClick={handlePostSubmit}>
   Post
   </Button>{' '}

  <Button variant="outline-danger" onClick={onCancel}> Cancel </Button>
</div>

</Form>
</>
)


}