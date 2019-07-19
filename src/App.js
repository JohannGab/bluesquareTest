import React, { Component } from 'react'
import theBest from'./Images/meilleurMamanDuMonde.png';
// import comments from'./Images/comments.png';
import './AppBluesquare.scss'

import Change from'./Change.json';

class App extends Component {
  state = {
    images: theBest,
    changeImageClik: Change,
    i: 0,
  }



  changeImage = () => {
    const size = Change
      if (this.state.i < size.length){
      const url = this.state.changeImageClik[this.state.i]
      const imageUrl = url.changeImages
      this.setState({ images: imageUrl })
      this.setState({ i: this.state.i+1 })
      console.log(this.state.i);
  } else {
    
  }
}

  
  render() {
        
    return (
    <>
    <div className="containerBase">
    <div className="container">
        <div className="shopContainer">
          <img onClick={this.changeImage} src={this.state.images} alt="" ></img>
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
            <i className="fas fa-heart"></i>
            <i className="fas fa-comment-alt"></i>
            <i className="fas fa-share-square"></i>
          </div>
      </div>
      <div className="container3">
          <div>
            <h3>ACHETER <span>|</span> CRÉER</h3>
          </div>
      </div>
      <div className="container4">
          <div>
            <p><i className="fas fa-user"></i>Bouriche-Hamza</p>
          </div>
      </div>
      </div>

    </>
  
  );
}
}


export default App;
