import axios from "axios";
import { useEffect, useState  } from "react";
import {useHistory, useParams} from 'react-router-dom';

export default function Sent(props){
  const {cardId} = props;

  const userId = localStorage.getItem('userId')
  console.log('local',userId, cardId);
  // const { id }= useParams();
  // const userId = id;
  // console.log('paramid', id);
  const [ cardList, setCardList]= useState([]);
  const history = useHistory();
  const showCard = (id) => {
    history.push(`/card/${id}`);
  }
  const sentCards = () => {
    console.log('clicked on sentcards');
    const url = 'http://localhost:3001/api/sent/';
    const data = {userId, cardId};
    axios.post(url, data, {withCredentials: true})
    .then(res => {
      console.log('Card details got', res.data.sent_cards);
      setCardList(res.data.sent_cards)

    })
    .catch(e => console.log('err', e))
  }
  useEffect(()=>{
    console.log('rendering useEffect');
    sentCards();
  },[])

  return(
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4 className='heading'>Cards Created</h4>
      
      {/* <button onClick={sentCards}>click to view cards</button> */}
      {cardList.map(card => (
        <div key = {card.id} className="sentcss">
          <div className="titlebg">
            <a onClick={()=>showCard(card.id)} href={``}>
                <h6>{card.title}</h6>
                <img src= {card.background_image}/>
            </a>
          </div>
        </div>
      )
        
      )}
    </>
  );
}