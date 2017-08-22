import React from 'react';
import R from 'ramda';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import MovieFormCard from '../components/MovieFormCard';

type MovieFormValues = {
  title: string,
};

type MovieFormValidationErrors = {
  title?: string,
};

type MovieFormCardContainerProps = {
  handleSubmit: Function,
  onAddMovie: Function,
  onCancel: Function,
  submitting: Boolean,
};

const MovieFormCardContainer = ({
  handleSubmit,
  onAddMovie,
  onCancel,
  submitting,
}: MovieFormCardContainerProps) =>
  (<MovieFormCard
    onAddMovie={handleSubmit(onAddMovie)}
    onCancel={onCancel}
    isSubmitting={submitting}
  />);

const validateForm = (values: MovieFormValues): MovieFormValidationErrors => {
  const errors: MovieFormValidationErrors = {};
  if (!values.title) {
    errors.title = 'Title is missing';
  }
  return errors;
};

export default R.compose(
  connect(null, {
    onSubmitSuccess: () => reset('newMovie'),
  }),
  reduxForm({
    form: 'newMovie',
    fields: ['title'],
    validate: validateForm,
  }),
)(MovieFormCardContainer);
