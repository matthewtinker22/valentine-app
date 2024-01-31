import {Button} from "@mui/material";
import './LandingPage.scss';
import {Link} from "react-router-dom";

export const LandingPage = () => {

  return (
    <div className="landingPageContainer">
      <h1 className="landingPageText">
        Will you be my Valentine, Elle?
      </h1>
      <div className="buttonContainer">
        <div>
          <Link to="/yesValentine">
            <Button
              className="button"
              id="yes-button"
              variant="contained"
            >
              Yes, of course! :)
            </Button>
          </Link>
        </div>
        <div>
          <Link to='noValentine'>
            <Button
              className="button"
              id="no-button"
              variant="contained"
            >
              Nah, I don't really feel like it :(
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;