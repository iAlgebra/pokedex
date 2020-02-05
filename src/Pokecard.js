import React, {Component} from 'react';

class Pokecard extends Component {
  render() {
    return (
        <div>
          <h3>Name of Pokemon</h3>
          <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
              alt=""/>
          <p>Description</p>
        </div>
    );
  }
}

export default Pokecard;
