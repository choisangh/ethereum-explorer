import React from 'react';
import Particles from "particlesjs";


class Main extends React.Component {


  render() {
    return (
      <div className="sectio nav">
        <h1>ETHEREUM  <br /> EXPLORER</h1>
        
        <div className="search-form-container" style={{ zIndex: 1 }}>
        <form className="search-form" style={{ zIndex: 1 }} >
            <input type="text" placeholder="Search by Txn Hash / Block Number / Block Hash" />
            <button type="submit">Search</button>
        </form>
        </div>
        <h3 className="span loader">
          <span className="m">S</span>
          <span className="m">E</span>
          <span className="m">A</span>
          <span className="m">R</span>
          <span className="m">C</span>
          <span className="m">H</span>

          <span className="m">&nbsp;</span>
          <span className="m">E</span>
          <span className="m">T</span>
          <span className="m">H</span>
          <span className="m">E</span>
          <span className="m">R</span>
          <span className="m">E</span>
          <span className="m">U</span>
          <span className="m">M</span>
          <span className="m">&nbsp;</span>
          <span className="m">B</span>
          <span className="m">L</span>
          <span className="m">O</span>
          <span className="m">C</span>
          <span className="m">K</span>
        </h3>
        

      </div>
    );
  }
}

export default Main;
