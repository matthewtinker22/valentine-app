import React from 'react';
import './App.css';
import LandingPage from "./Pages/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import YesValentinePage from "./Pages/YesValentinePage";
import NoValentinePage from "./Pages/NoValentinePage";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={LandingPage}/>
              <Route path="/yesValentine" Component={YesValentinePage}/>
              <Route path="/noValentine" Component={NoValentinePage}/>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
