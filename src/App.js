import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PersonalInfo from './views/PersonalInfo';
import Experience from './views/Experience';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={PersonalInfo} />
        <Route path="/experience" component={Experience} />
      </div>
    </BrowserRouter>
    
  );
}


export default App;
