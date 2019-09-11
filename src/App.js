import React from 'react';
import './App.css';
import Chapter from './components/Chapter';
import Fade from 'react-reveal/Fade';

const animateList = ["Personal Information", "Studies", "Experience", 4, 5];


function App() {
  
  return (
    <div className="App">
      <Fade top>
        <h1>PORTFOLIO</h1>
      </Fade>

      <Fade top>
        <Chapter title={animateList[0]}/>
      </Fade>
    </div>
  );
}


export default App;
