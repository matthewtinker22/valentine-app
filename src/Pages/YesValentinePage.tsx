import '../SCSS/YesValentinePage.scss';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export const YesValentinePage = () => {
  return (
    <div className="yesPageContainer">
      <h1 className="yesPageText">
        I'm so glad you'll be my Valentine :)
        <div>
          Here are some custom conversation hearts I made for you!
        </div>
      </h1>
      <div className="buttonContainer">
        <div>
          <Link to="/yesValentine">
            <Button
              className="button"
              id="show-me-button"
              variant="contained"
            >
              Show me!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YesValentinePage;