import Button from "./Button";

export default function AddGif(props) {

  const onClick = () => {
    console.log('clicked on add Gif');
  }
  
  const title = "Add Gif";

  return (
    <>
      <Button onClick = {onClick} title = {title}/> 
    </>
  )
}