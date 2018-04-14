import React from 'react';
import logo from '../imagens/sanar.png';

export default class Header extends React.Component {
  render(){
    return(
      <div className="header">
        <div className="section-container header-content">
          <img src={logo}/>
          <div className="header-link">
            <a href="#">Lorem ip link 1</a>
            <a href="#">Lorem ip link 2</a>
            <i className="icon fab fa-instagram"></i>
          </div>
        </div>
      </div>
    );
  }
}
