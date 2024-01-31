import React from 'react';
import './App.css';
import LandingPage from "./LandingPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import YesValentinePage from "./YesValentinePage";
import NoValentinePage from "./NoValentinePage";
import ConversationHeartsPage from "./ConversationHeartsPage";

function App() {
  return (
      <div className="App">
          <HashRouter>
            <Routes>
              <Route path="/" Component={LandingPage}/>
              <Route path="/yesValentine" Component={YesValentinePage}/>
              <Route path="/noValentine" Component={NoValentinePage}/>
              <Route path="/conversationHearts" Component={ConversationHeartsPage}/>
            </Routes>
          </HashRouter>
      </div>
  );
}

export default App;
