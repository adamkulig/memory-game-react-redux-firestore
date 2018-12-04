import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import gameReducer from './gameReducer';

const rootReducer = combineReducers ({
  game: gameReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
