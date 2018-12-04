import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import SingleCard from '../SingleCard/SingleCard';
import './CardsGrid.scss';

class CardsGrid extends Component {
  render() {
    const { pullOfCards, level } = this.props.game;

    return (
      <div className="cards-grid">

        <Container fluid>
          {level === 'EASY' && (
            <Row noGutters>
              <Col xs="6" >
                <Row noGutters>
                  {pullOfCards.slice(0,8).map(card => (
                    <Col xs="6" sm="4" key={card.id}>
                      <SingleCard id={card.id}/>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs="6" >
                <Row noGutters>
                  {pullOfCards.slice(8).map(card => (
                    <Col xs="6" sm="4" key={card.id}>
                      <SingleCard id={card.id}/>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          )}

          {level === 'MEDIUM' && (
            <Row noGutters>
              <Col xs="6" >
                <Row noGutters>
                  {pullOfCards.slice(0,16).map(card => (
                    <Col xs="4" lg="3" key={card.id}>
                      <SingleCard id={card.id}/>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs="6" >
                <Row noGutters>
                  {pullOfCards.slice(16).map(card => (
                    <Col xs="4" lg="3" key={card.id}>
                      <SingleCard id={card.id}/>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          )}

          {level === 'HARD' && (
            <Row noGutters>
              <Col xs="6" >
                <Row noGutters>
                  {pullOfCards.slice(0,24).map(card => (
                    <Col xs="4" xl="2" key={card.id}>
                      <SingleCard id={card.id}/>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs="6" >
                <Row noGutters>
                  {pullOfCards.slice(24).map(card => (
                    <Col xs="4" xl="2" key={card.id}>
                      <SingleCard id={card.id}/>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          )}

          {level === 'IMPOSSIBLE' && (
            <Row noGutters>
              <Col xs="6" >
                <Row noGutters>
                  {pullOfCards.slice(0,32).map(card => (
                    <Col xs="3" lg="2" key={card.id}>
                      <SingleCard id={card.id}/>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs="6" >
                <Row noGutters>
                  {pullOfCards.slice(32).map(card => (
                    <Col xs="3" lg="2" key={card.id}>
                      <SingleCard id={card.id}/>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps)(CardsGrid);
