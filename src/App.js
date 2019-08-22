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

      {/* {animateList.map((item, key) => {
        <div style={styles.block} key={key}>
          <Fade top>
            <Chapter name={item}/>
          </Fade>
        </div>
      })} */}
    </div>
  );
}


export default App;
