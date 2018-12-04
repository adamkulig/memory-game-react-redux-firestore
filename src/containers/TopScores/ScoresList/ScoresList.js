import React from 'react';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

const ScoresList = ({ data, level }) => (
  <Card className='my-3'>
    <CardHeader>{level}</CardHeader>
    <CardBody>
      <ListGroup>
        {data.map(score => (
          <ListGroupItem className='d-flex' key={score.id}>
            <div>{score.login}</div>
            <div className='ml-auto font-weight-bold'>{score.numberOfTurns}</div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>
  </Card>
);

export default ScoresList;
