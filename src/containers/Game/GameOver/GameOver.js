import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';
import * as actionCreators from '../../../store/actions/index';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import LevelButtons from '../../LevelButtons/LevelButtons';
import pikachu from '../../../images/Pikachu-modal.png';
import './GameOver.scss';

class GameOver extends Component {
  sendScore = () => {
    const { firestore } = this.props;
    const { numberOfTurns, level, login } = this.props.game;
    const score = {
      login,
      numberOfTurns
    }
    firestore.add({ collection: level }, score);
  }

  render() {
    const { numberOfTurns, gameOver } = this.props.game;
    return (
        <Modal isOpen={gameOver} toggle={this.props.onCloseModal}>
          <ModalBody className="gameOverModal__body">
            <div>You win! Your result is {numberOfTurns} turns!</div>
            {/* <Button className="gameOverModal__sendbutton" size="sm" color="info" onClick={this.sendScore}>Send score</Button> */}
            <div>and try again!</div>
            <LevelButtons />
            <img src={pikachu} alt='pikachu' className="gameOverModal__img"/>
          </ModalBody>
        </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  };
}

const mapDispatchToProps = {
  onCloseModal: actionCreators.closeModal
};

export default compose(
  firestoreConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(GameOver);
