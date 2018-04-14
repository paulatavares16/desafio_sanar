import React from 'react';
import down from '../imagens/down.png';
import phone from '../imagens/phone.jpeg';

export default class Feature extends React.Component {
  render() {
    return(
      <div className="feature">
        {this.props.phonePosition=="left" ? <img src={phone}/> : null}
        <div className="feature-content">
          <div className="feature-content-tag">
            {this.props.tag}
          </div>
          <h2 className="feature-content-name">
            {this.props.name}
            {this.props.platforms.map((p) =>
              <i key={p} className={"icon fab fa-"+p}></i>
            )}
          </h2>
          <div className="feature-content-description">
            {this.props.description}
          </div>
          <img src={down}/>
        </div>
        {this.props.phonePosition=="right" ? <img src={phone}/> : null}
      </div>
    )
  }
}
