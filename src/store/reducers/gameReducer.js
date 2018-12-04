import * as actionTypes from '../actions/actionTypes';
import allCards from '../../data/data';
import shuffle from 'lodash/shuffle';
import pick from 'lodash/pick';

const initialState = {
  gameIsOn: false,
  pullOfCards: [],
  flippedCards: [],
  numberOfPairs: 0,
  numberOfTurns: 0,
  level: '',
  gameOver: false,
  login: ''
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {
        ...state,
        login: action.login
      }
    case actionTypes.RESET_GAME:
      return {
        ...initialState,
        login: state.login
      }
    case actionTypes.GET_CARDS:
      let cards = getCards(action.level);
      cards = duplicateCards(cards);
      cards = shuffle(cards);
      cards = cards.map((card, index) => ({
        name: card, 
        isFlipped: false,
        isHit: false,
        id: index
      }))
      return {
        ...initialState,
        gameIsOn: true,
        pullOfCards: cards,
        level: action.level,
        login: state.login
      }
    case actionTypes.FLIP_CARD:
    let currentFlippedCard = state.pullOfCards.find(card => card.id === action.id);
    currentFlippedCard = pick(currentFlippedCard, ['name', 'id', 'isHit']); 
    const theSameCard = state.flippedCards.some(card => card.id === currentFlippedCard.id);
    if (state.flippedCards.length < 2 && !theSameCard && !currentFlippedCard.isHit) {
      const update = state.pullOfCards.map(card => ({
        ...card,
        isFlipped: card.isFlipped || card.id === action.id
      }));
      return {
        ...state,
        pullOfCards: update,
        flippedCards: [...state.flippedCards, currentFlippedCard]
      } 
    } else {
        return state;
    }
    case actionTypes.TAKE_CARDS:
      const takeCards = state.pullOfCards.map(card => ({
        ...card,
        isHit: card.isFlipped
      }));
      return {
        ...state,
        pullOfCards: takeCards,
        flippedCards: [],
        numberOfPairs: state.numberOfPairs + 1,
        numberOfTurns: state.numberOfTurns + 1,
        gameOver: state.numberOfPairs + 1 === takeCards.length / 2
      }
    case actionTypes.HIDE_CARDS:
      const hideCards = state.pullOfCards.map(card => ({
        ...card,
        isFlipped: card.isHit
      }))
      return {
        ...state,
        pullOfCards: hideCards,
        flippedCards: [],
        numberOfTurns: state.numberOfTurns + 1
      }
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        gameOver: false
      }
    default:
      return state;
  }
}

const getCards = level => {
  switch (level) {
    case 'EASY':
      return shuffle(allCards).slice(0,8);
    case 'MEDIUM':
      return shuffle(allCards).slice(0,16);
    case 'HARD':
      return shuffle(allCards).slice(0,24);
    case 'IMPOSSIBLE':
      return shuffle(allCards).slice(0,32);
    default:
      return null;
  }
}

const duplicateCards = cards => cards.reduce((pool, card) => [...pool, card, card], []);

export default gameReducer;
