import React from 'react';
import Card from './Card';
import Button from './Button';
import TextInput from './TextInput';

type MovieFormCardProps = {
  onAddMovie: Function,
  onCancel: Function,
  isSubmitting: Function,
};

const MovieFormCard = ({ onAddMovie, onCancel, isSubmitting }: MovieFormCardProps) =>
  (<Card centered>
    <Card.Title>Vote for a movie</Card.Title>
    <Card.Text>You can vote for any movie you'd like.</Card.Text>
    <Card.Text>We will add them in the list if they don't exist.</Card.Text>
    <Card.Section>
      <form onSubmit={onAddMovie}>
        <TextInput name="title" placeholder="Movie name" block />
      </form>
    </Card.Section>
    <Card.Actions>
      <Button onClick={onAddMovie} disabled={isSubmitting} primary>
        Add movie
      </Button>
      <Button onClick={onCancel} disabled={isSubmitting} secondary>
        Cancel
      </Button>
    </Card.Actions>
  </Card>);

export default MovieFormCard;
