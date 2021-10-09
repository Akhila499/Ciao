import { useState } from "react";
import Button from "./Button";
import ContributorForm from "./ContributorForm";

export default function Contributors(props) {
  const {cardId} = props;
  const [showContributor, setShowContributor] = useState(false);
  const handleCon = () => {
    setShowContributor(true);
  }
  return (
    <>
      {showContributor ? <ContributorForm cardId={cardId}/> : <Button title="Add Contributors" onClick = {handleCon}/>  }   
    </>

  );
}