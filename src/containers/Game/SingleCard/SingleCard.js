import React, { Component } from 'react';
import './SingleCard.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
import classNames from 'classnames';
import back from '../../../images/back.jpg';

class Card extends Component {
  render() {
    const { id } = this.props;
    const { name, isFlipped } = this.props.game.pullOfCards[id];
    const disabledClick = this.props.game.flippedCards.length === 2;
    return (
      <div className='single-card' onClick={() => !disabledClick && this.props.onClickCard(id)}>
        <img
          src={back} 
          alt='pokemon-card-back'
          className={classNames(
            'single-card__side', 
            isFlipped && 'single-card__side--hidden', 
            !isFlipped && 'single-card__side--visible')}
        /> 
        <img 
          src={require(`../../../images/${name}.png`)}
          alt='pokemon-card-front'
          className={classNames(
            'single-card__side', 
            !isFlipped && 'single-card__side--hidden', 
            isFlipped && 'single-card__side--visible')}
        />
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
  onClickCard: actionCreators.clickCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

