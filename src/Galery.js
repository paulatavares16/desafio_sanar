import React from 'react';
import GaleryItem from './GaleryItem';
import down from '../imagens/down.png';

export default class Feature extends React.Component {
  render(){
    return(
      <div className="feature-galery">
        <div className="feature-galery-tag">
          Ut Sagittis™
        </div>
        <h2 className="feature-galery-title">
          Quiosque cussus et, portitor risos. Alicom sem
        </h2>

        <div className="feature-galery-images">
          <GaleryItem
            title="Quisque Lorem"
            description="Quisque cursos at portitor risos atiquam indrerit nula."
          />
          <GaleryItem
            title="Interger Ultrices"
            description="Quisque cursos at portitor risos atiquam indrerit nula."
          />
          <GaleryItem
            title="Aliquam Erat"
            description="Quisque cursos at portitor risos atiquam indrerit nula."
          />
        </div>
        <img src={down}/>
      </div>
    )
  }
}
