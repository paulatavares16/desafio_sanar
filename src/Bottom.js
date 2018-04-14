import React from 'react';
import followbutton from '../imagens/followbutton.png';

export default class Bottom extends React.Component {
  render(){
    return(
      <div className="bottom">
        <div className="section-container bottom-content">
          <div className="bottom-links">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">Apps</a>
            <a href="#">Help</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="bottom-follow">
            <img src={followbutton}/>
            Sellys, Warsaw 2013
          </div>
        </div>
      </div>
    );
  }
}
