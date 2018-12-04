import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import * as actionCreators from '../../store/actions';
import './Panel.scss';
import classNames from 'classnames';

class Panel extends Component {
  render() {
    const { numberOfTurns, gameIsOn } = this.props.game;
    const { onResetGame } = this.props;
    const turnsClasses = classNames(
      'panel__turns', 
      !gameIsOn && 'panel__turns--hidden'
    );
    return (
      <div className="panel">
        <span className="panel__header">Memory Game</span>
        <span className={turnsClasses} >turns: {numberOfTurns}</span>
        <Button className="panel__btn" size="sm" color="info" >
          <NavLink exact to="/topscores">Top Scores</NavLink>
        </Button>
        <Button onClick={onResetGame} className="panel__btn" size="sm" color="info" >
          <NavLink exact to="/">New Game</NavLink>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  };
}

const mapDispatchToProps = {
  onResetGame: actionCreators.resetGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
