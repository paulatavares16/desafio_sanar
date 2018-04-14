import React from 'react';

export default class GaleryItem extends React.Component {
  render(){
    return(
      <div className="feature-galery-image">
        <div className="feature-galery-image-board">
          <div className="feature-galery-image-img"></div>
        </div>
        <div className="feature-galery-image-title">
          {this.props.title}
        </div>
        <div className="feature-galery-image-description">
          {this.props.description}
        </div>
      </div>
    )
  }
}
