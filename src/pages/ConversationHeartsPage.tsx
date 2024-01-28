import {Button} from "@mui/material";
import "../scss/ConversationHeartsPage.scss";
import {heartContentArray} from "../constants/HeartContentArray";
import {useEffect, useState} from "react";
import {Favorite} from "@mui/icons-material";

export const ConversationHeartsPage = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(Math.random() * heartContentArray.length));
  const [activeColor, setActiveColor] = useState(Math.floor(Math.random()*16777215).toString(16));

  const handleNextClick = () => {
    let newIndex;
    const randomNum = Math.floor(Math.random() * heartContentArray.length);

    if (randomNum === activeIndex) {
      newIndex = Math.floor(Math.random() * heartContentArray.length);
    } else {
      newIndex = randomNum;
    }

    setActiveIndex(newIndex);
    setActiveColor(Math.floor(Math.random()*16777215).toString(16));
  }

  return (
    <div className="conversationHeartsPageContainer">
      <div className="conversationHeartContainer">
        <Favorite
          className="conversationHeart"
          fontSize="large"
          style={{"color": activeColor, "width": "20rem", "height": "20rem"}}
        />
        <div className="conversationHeartText">
            {heartContentArray[activeIndex]}
          </div>
        {/*<div className="conversationHeartText">*/}
        {/*  {heartContentArray[activeIndex]}*/}
        {/*</div>*/}
      </div>
      <Button
        className="button"
        id="next-button"
        variant="contained"
        onClick={handleNextClick}
      >
        Next
      </Button>
    </div>
  )
}

export default ConversationHeartsPage;