import React from 'react';
import Button from './Button';
import Card from './Card';

const MoviesEmpty = ({ onShowAddMovie }: { onShowAddMovie: Function }) =>
  (<Card secondary centered>
    <Card.Title>Let's get this going</Card.Title>
    <Card.Subtitle>Propose your favourite SciFi movie</Card.Subtitle>
    <Card.Text>You can propose any sci fi movie.</Card.Text>
    <Card.Text>You can vote for them using your ethereum wallte.</Card.Text>
    <Card.Actions centered>
      <Button primary lg onClick={onShowAddMovie}>
        Add a movie
      </Button>
    </Card.Actions>
  </Card>);

export default MoviesEmpty;
