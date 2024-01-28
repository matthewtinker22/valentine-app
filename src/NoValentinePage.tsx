import './NoValentinePage.scss';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export const NoValentinePage = () => {
  return (
    <div className="noPageContainer">
      <h1 className="noPageText">
        Are you sure you don't want to be my Valentine? :(
      </h1>
      <div className="buttonContainer">
        <div>
          <Link to="/yesValentine">
            <Button
              className="button"
              id="reconsider-button"
              variant="contained"
            >
              Ugh, fine, I guess I'll reconsider
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoValentinePage;