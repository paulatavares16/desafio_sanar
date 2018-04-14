import React from 'react';
import ReviewItem from './ReviewItem';

export default class Reviews extends React.Component {
  render(){
    return(
      <div className="reviews">
        <div className="section-container">
          <div className="reviews-tag">
            Vel Bibendum
          </div>
          <h2 className="reviews-title">
            PHASELLUS FERMENTUM IN, DOLOR FACILISIS.
          </h2>
          <div className="reviews-itens">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <ReviewItem
                    name="TAMATHA EALY"
                    twitter="@foxrum"
                    comment="Nullam wisi ultricies a, gravida vitae dabitus risos ant sodav. Nullam wisi ultricies a, gravida vitae dabitus risos ant sodav. Meriumdum bla."
                  />

                </div>
                <div className="col-md-6">
                  <ReviewItem
                    name="TAMATHA EALY"
                    twitter="@foxrum"
                    comment="Nullam wisi ultricies a, gravida vitae dabitus risos ant sodav. Nullam wisi ultricies a, gravida vitae dabitus risos ant sodav. Meriumdum bla."
                  />
                </div>
                <div className="col-md-6">
                  <ReviewItem
                    name="TAMATHA EALY"
                    twitter="@foxrum"
                    comment="Nullam wisi ultricies a, gravida vitae dabitus risos ant sodav. Nullam wisi ultricies a, gravida vitae dabitus risos ant sodav. Meriumdum bla."
                  />
                </div>
                <div className="col-md-6">
                  <ReviewItem
                    name="TAMATHA EALY"
                    twitter="@foxrum"
                    comment="Nullam wisi ultricies a, gravida vitae dabitus risos ant sodav. Nullam wisi ultricies a, gravida vitae dabitus risos ant sodav. Meriumdum bla."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
