import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const {name, type, experience, imgSrc} = this.props;
    return (
        <div className="Pokecard">
          <h3>{name}</h3>
          <img
              src={imgSrc}
              alt=""/>
          <p>Type: {type}</p>
          <p>EXP: {experience}</p>
        </div>
    );
  }
}

export default Pokecard;
