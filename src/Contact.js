import React from 'react';

export default class Contact extends React.Component {
  render(){
    return(
      <div className="contact">
        <div className="section-container">
          <h2 className="contact-title">
            Sign up for free and start using sellys
          </h2>
          <div className="contact-description">
            Nullam wisi ultricies a, gravida vitae dabitus risos ant sodavis
            lectus bladit eu, tempor diam pede cursos vitae, ultrices.
          </div>
          <div className="input-group">
            <input type="text" className="form-control form-control-lg" placeholder="name@domain.com"/>
            <div className="input-group-append">
              <button className="btn btn-lg btn-success">SIGN UP NOW</button>
            </div>
          </div>
          <div className="contact-alert">
            <i className="icon fas fa-exclamation-triangle"></i>
            Nullam wisi ultrices a, gravida vitae
          </div>
        </div>
      </div>
    )
  }
}
