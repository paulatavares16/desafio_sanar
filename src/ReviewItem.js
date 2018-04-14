import React from 'react';

export default class ReviewItem extends React.Component {
  render(){
    return(
      <div className="review">
        <div className="review-image"></div>
        <h6 className="review-name">
          {this.props.name}
        </h6>
        <div className="review-twitter">
          {this.props.twitter}
        </div>
        <div className="review-comment">
          {'"' + this.props.comment + '"'}
        </div>
      </div>
    );
  }

}
