import Button from "./Button";

export default function SearchBar(){
  const handleClick = () => {
    console.log('clicked on the add img')
  }
  return (
    <>
      <Button onClick = {handleClick}/>
    </> 
  );
}