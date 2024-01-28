import React from 'react';
import './App.css';
import LandingPage from "./Pages/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import YesValentinePage from "./Pages/YesValentinePage";
import NoValentinePage from "./Pages/NoValentinePage";
import ConversationHeartsPage from "./Pages/ConversationHeartsPage";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={LandingPage}/>
              <Route path="/yesValentine" Component={YesValentinePage}/>
              <Route path="/noValentine" Component={NoValentinePage}/>
              <Route path="/conversationHearts" Component={ConversationHeartsPage}/>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
