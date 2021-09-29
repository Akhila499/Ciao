import Button from "./Button";

export default function AddGif(props) {

  const onClick = () => {
    console.log('clicked on add Gif');
  }
  
  const title = "Add Gif";


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
    console.log('@@#$tyui');
    const reactData = {selectedGif, selectText, selectedGifId}
    const url = 'http://localhost:3001/api/gif/'
    let sendData = () => {
    axios.post(url, reactData)
      .then(res => console.log('data send'))
      .catch(err => console.log('--->--',err.data))
    }
    sendData();
    history.push('/createcard');
  }
  return (
    <>
      <Button onClick = {onClick} title = {title}/> 
    </>
  )
}