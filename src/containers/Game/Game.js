import React, { Component } from 'react';
import GameOver from './GameOver/GameOver';
import CardsGrid from './CardsGrid/CardsGrid';
import './Game.scss';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <CardsGrid />
        <GameOver />
      </div>
    );
  }
}

export default Game;
