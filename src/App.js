import React, { Component } from 'react'
import theBest from'./Images/meilleurMamanDuMonde.png';
import comments from'./Images/comments.png';
import './AppBluesquare.scss'

import Change from'./Change.json';

class App extends Component {
  state = {
    changeImage: true,
  }

  render() {
  return (
    <>
    <div className="containerBase">
    <div className="container">
        <div className="shopContainer">
          <img src={theBest} alt="" ></img>
        </div>
        <div>
            <h5>Tote bag pour une<br></br> meilleure maman lt 3</h5>
        </div>
        <div>
            <p className="pDeco">-</p>
        </div>
        <div>
            <p>21,90 €</p>
        </div>
      </div>
      <div className="container2">
          <div>
            <img src={comments} alt=""></img>
            <img src={comments} alt=""></img>
            <img src={comments} alt=""></img>
          </div>
      </div>
      <div className="container3">
          <div>
            <h3>ACHETER <span>|</span>CRÉER</h3>
          </div>
      </div>
      <div className="container4">
          <div>
            <p><img src="" alt=""></img>Bouriche-Hamza</p>
          </div>
      </div>
      </div>

    </>
  
  );
}
}


export default App;
