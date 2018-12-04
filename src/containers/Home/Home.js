import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import './Home.scss';
import '../LevelButtons/LevelButtons';
import LevelButtons from '../LevelButtons/LevelButtons';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { androidDone } from 'react-icons-kit/ionicons';

const initialState = {
  text: ''
}
const ENTER_KEY_CODE = 13;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  onTextChange = event => 
  this.setState({
    text: event.target.value  
  });

  enterClicked = e => e.keyCode === ENTER_KEY_CODE && this.onLogIn();

  onLogIn = () => {
    this.props.onLogIn(this.state.text);
    this.clearState();
    }

  clearState = () => this.setState(initialState); 

  render() {
    const { text } = this.state;
    const inputIsEmpty = text.length === 0;
    const login = this.props.game.login;
    const loginIsEmpty = this.props.game.login.length === 0 ;
    return (
      <div className="home">
        <h5 className="home__title">Welcome in my memory game!</h5>
        <InputGroup className="home__login">
          <Input type="text" name="login" placeholder="Write your name..." onChange={this.onTextChange} onKeyUp={this.enterClicked} autoComplete="off" value={text}/>
          <InputGroupAddon addonType="append">
            <Button className='home__button' color="info" disabled={inputIsEmpty}><Icon size={24} icon={androidDone} onClick={this.onLogIn} /></Button>
          </InputGroupAddon>
        </InputGroup>
        { !loginIsEmpty && (
          <React.Fragment>
            <h6 className="home__subtitle">Choose level {login}:</h6>
            <LevelButtons/>
          </React.Fragment>
        )}
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
  onLogIn: actionCreators.logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
