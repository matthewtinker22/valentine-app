import {Button} from "@mui/material";
import "./ConversationHeartsPage.scss";
import {heartContentArray} from "./HeartContentArray";
import {useCallback, useEffect, useMemo, useState} from "react";
import {Favorite} from "@mui/icons-material";
import {Link} from "react-router-dom";

export const ConversationHeartsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeColor, setActiveColor] = useState(Math.floor(Math.random()*16777215).toString(16));

  const randomArray = useMemo(() => {
    return heartContentArray.sort(() => Math.random() - 0.5);
  }, []);

  const handleBackClick = useCallback(() => {
    let newIndex;

    if (activeIndex !== 0) {
      newIndex = activeIndex - 1;
    } else {
      newIndex = randomArray.length - 1;
    }

    setActiveIndex(newIndex);
    setActiveColor(Math.floor(Math.random()*16777215).toString(16));
  }, [activeIndex, randomArray.length]);

  const handleNextClick = useCallback(() => {
    let newIndex;

    if (activeIndex !== randomArray.length - 1) {
      newIndex = activeIndex + 1;
    } else {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
    setActiveColor(Math.floor(Math.random()*16777215).toString(16));
  }, [activeIndex, randomArray.length]);

  useEffect(() => {
    console.debug('randomArray:', randomArray);
  }, [randomArray]);

  return (
    <div className="conversationHeartsPageContainer">
      <div className="conversationHeartContainer">
        <Favorite
          className="conversationHeart"
          fontSize="large"
          style={{"color": activeColor, "width": "20rem", "height": "20rem"}}
        />
        <div className="conversationHeartText">
          {randomArray[activeIndex]}
        </div>
      </div>
      <div className="buttonContainer">
        <div>
          <Button
            className="button"
            id="back-button"
            variant="contained"
            onClick={handleBackClick}
          >
            Back
          </Button>
        </div>
        <div>
          <Button
            className="button"
            id="next-button"
            variant="contained"
            onClick={handleNextClick}
          >
            Next
          </Button>
        </div>
      </div>
      <div>
        <Link to='/'>
          <Button
            className="button"
            id="home-button"
            variant="contained"
          >
            Home
          </Button>
        </Link>
      </div>
      {/*<div>*/}
      {/*  <Link to="/conversationHeartsList">*/}
      {/*    <Button*/}
      {/*      className="button"*/}
      {/*      id="list-button"*/}
      {/*      variant="contained"*/}
      {/*    >*/}
      {/*      See all conversation hearts :)*/}
      {/*    </Button>*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  )
}

export default ConversationHeartsPage;