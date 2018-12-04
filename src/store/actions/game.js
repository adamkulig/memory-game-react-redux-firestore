import * as actionTypes from './actionTypes';

export const getCards = level => {
  return {
    type: actionTypes.GET_CARDS,
    level
  }
}

export const logIn = login => {
  return {
    type: actionTypes.LOG_IN,
    login
  }
}

export const resetGame = () => {
  return {
    type: actionTypes.RESET_GAME
  }
}

export const clickCard = id => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  await dispatch(flipCard(id));
  const takeOrHideCards = () => {
    const state = getState().game;
    if (state.flippedCards.length === 2) {
      if (state.flippedCards[0].name === state.flippedCards[1].name) {
        dispatch(takeCards())
        const gameOver = state.numberOfPairs + 1 === state.pullOfCards.length / 2;
        if (gameOver) {
          const { numberOfTurns, level, login } = state;
          const score = {
            login,
            numberOfTurns: numberOfTurns + 1
          }
          firestore.add({ collection: level }, score);
        }
      } else {
        setTimeout(() => {
          dispatch(hideCards())
        }, 750)
      }
    }
  }
  await takeOrHideCards();
}
 
export const flipCard = id => {
  return {
    type: actionTypes.FLIP_CARD,
    id
  }
}

export const takeCards = () => {
  return {
    type: actionTypes.TAKE_CARDS
  }
}

export const hideCards = () => {
  return {
    type: actionTypes.HIDE_CARDS
  }
}

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  }
}