import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import PersonalInfo from "./views/PersonalInfo/PersonalInfo";
import Education from "./views/EducationAndExp/Education";

function App() {
  return (
    <BrowserRouter>
      <div id="App" className="App h-100">
        <Navbar />
        <Route exact path="/" component={PersonalInfo} />
        <Route path="/education_and_exp" component={Education} />
      </div>
    </BrowserRouter>
  );
}

export default App;
