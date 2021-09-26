import Button from "./Button";

export default function AddVideo(props) {
  const onClick = () => {
    console.log('clicked on add video');
  }
  const title = "Add Video"
  return (
    <>
      <Button onClick={onClick} title = {title}/>
    </>
  )
}