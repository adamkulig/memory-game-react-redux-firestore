import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actionCreators from '../../store/actions';
import { Button } from 'reactstrap';
import './LevelButtons.scss';

class LevelButtons extends Component {
  render() {
    const loginIsEmpty = this.props.game.login.length === 0 ;
    return (
      <NavLink className="level-buttons" to="/game">
        <Button className="level-buttons__btn" size="sm" disabled={loginIsEmpty} color="info" onClick={() => this.props.onGetCards('EASY')}>EASY</Button>
        <Button className='level-buttons__btn' size="sm" disabled={loginIsEmpty} color="info" onClick={() => this.props.onGetCards('MEDIUM')}>MEDIUM</Button>
        <Button className="level-buttons__btn" size="sm" disabled={loginIsEmpty} color="info" onClick={() => this.props.onGetCards('HARD')}>HARD</Button>
        <Button className="level-buttons__btn" size="sm" disabled={loginIsEmpty} color="info" onClick={() => this.props.onGetCards('IMPOSSIBLE')}>IMPOSSIBLE</Button>
      </NavLink>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  };
}

const mapDispatchToProps = {
  onGetCards: actionCreators.getCards
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelButtons);