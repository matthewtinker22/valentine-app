import {heartContentArray} from "./HeartContentArray";
import {Favorite} from "@mui/icons-material";
import "./ConversationHeartsListPage.scss";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export const ConversationHeartsListPage = () => {
  console.debug(heartContentArray);

  const heartList = heartContentArray.map((heartContent) => {
    return (
      <div className="heart" key={heartContent}>
        <Favorite
          className="conversationHeart"
          fontSize="large"
          style={{"color": Math.floor(Math.random() * 16777215).toString(16), "width": "20rem", "height": "20rem"}}
        />
        <div className="heartText">
          {heartContent}
        </div>
      </div>
    );
  })

  return (
    <div className="heartListContainer">
      <div className="heartList">
        {heartList}
      </div>
      <div className="buttonContainer">
        <div>
          <Link to="/conversationHearts">
            <Button
              className="button"
              id="back-button"
              variant="contained"
            >
              Go back to random list
            </Button>
          </Link>
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
      </div>
    </div>
  );
};

export default ConversationHeartsListPage;
