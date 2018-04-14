import React from 'react';
import logo from '../imagens/Selly.png';
import more from '../imagens/more.png';

export default class Intro extends React.Component {
  render(){
    return(
      <div className="intro-slide">
        <div className="section-container">
          <img src={logo}/>
          <h2 className="intro-slide-title">
            Mussum Ipsum, cacilds vidis litro abertis.
            Manduma pindureta <b> quium dia nois paga </b>,
            Interessantiss pudia ce receita de bolis.
          </h2>
          <h6 className="intro-slide-subtitle">
            Quisque loreum tortor fringilla sed, vestibulum id, eleifend vestibulum id, eleifend
            Interessantiss pudia ce receita de bolis.
          </h6>
          <div className="intro-slide-actions">
            <button className="btn btn-lg btn-success">TAKE A TOUR</button>
            <button className="btn btn-lg btn-outline-light">WATCH THE VIDEO</button>
          </div>
          <img src={more}/>
        </div>
      </div>
    );
  }
}
