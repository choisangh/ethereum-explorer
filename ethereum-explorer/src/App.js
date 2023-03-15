import './App.css';
import React from 'react';
import Particles from "particlesjs";


class App extends React.Component {
  componentDidMount() {
    Particles.init({
      selector: ".background",
      color: ["#03dac6", "#ff0266", "#000000"],
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            color: ["#faebd7", "#03dac6", "#ff0266"],
            maxParticles: 43,
            connectParticles: false,
          },
        },
      ],
    });
  }

  render() {
    return (
      <div className="sectio nav">
        <h1>ETHEREUM EXPLORER</h1>
        <div className="search-form-container" style={{ zIndex: 1 }}>
        <form className="search-form" style={{ zIndex: 1 }} >
            <input type="text" placeholder="Search by Txn Hash / Block Number / Block Hash" />
            <button type="submit">Search</button>
        </form>
        </div>
        <h3 className="span loader">
          <span className="m">B</span>
          <span className="m">E</span>
          <span className="m">N</span>
          <span className="m">E</span>
          <span className="m">F</span>
          <span className="m">I</span>
          <span className="m">T</span>
          <span className="m">S</span>
          <span className="m">&nbsp;</span>
          <span className="m">o</span>
          <span className="m">f</span>
          <span className="m">&nbsp;</span>
          <span className="m">T</span>
          <span className="m">E</span>
          <span className="m">C</span>
          <span className="m">H</span>
          <span className="m">N</span>
          <span className="m">O</span>
          <span className="m">L</span>
          <span className="m">O</span>
          <span className="m">G</span>
          <span className="m">I</span>
          <span className="m">E</span>
          <span className="m">S</span>
        </h3>
        
        <canvas className="background" style={{ zIndex: 0 }}></canvas>
      </div>
    );
  }
}

export default App;
