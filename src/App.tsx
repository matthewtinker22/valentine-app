import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import YesValentinePage from "./pages/YesValentinePage";
import NoValentinePage from "./pages/NoValentinePage";
import ConversationHeartsPage from "./pages/ConversationHeartsPage";

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
