import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Panel from './Panel/Panel';
import TopScores from './TopScores/TopScores';
import Game from './Game/Game';
import Home from './Home/Home';
import Footer from '../components/Footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <Panel/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/game' component={Game} />
            <Route path='/topscores' component={TopScores} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
