import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container, Row, Col } from 'reactstrap';
import { map } from 'lodash';
import ScoresList from './ScoresList/ScoresList'

class TopScores extends Component {
  render() {
    const { scores } = this.props;
    return (
      <Container>
        <Row className='mb-3'>
          {scores && map(scores, (list, key) => (
            <Col key={key} xs={12} sm={6}>
              <ScoresList level={key} data={list}/>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.firestore.ordered
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'EASY', limit: 5, orderBy: ['numberOfTurns', 'asc'] },
    { collection: 'MEDIUM', limit: 5, orderBy: ['numberOfTurns', 'desc'] },
    { collection: 'HARD', limit: 5, orderBy: ['numberOfTurns', 'desc'] },
    { collection: 'IMPOSSIBLE', limit: 5, orderBy: ['numberOfTurns', 'desc'] }
  ])
)(TopScores);
