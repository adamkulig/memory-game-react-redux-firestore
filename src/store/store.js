import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebaseConfig from '../config/config.firebase';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({
      getFirebase,
      getFirestore
    })),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  ),
);

export default store;
