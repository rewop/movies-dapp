import R from 'ramda';
import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import voteMovie from '../actions/voteMovie';
import MovieForm from '../components/MovieForm';

type MovieFormValues = {
  title: string,
};

type MovieFormValidationErrors = {
  title?: string,
};

const validateForm = (values: MovieFormValues): MovieFormValidationErrors => {
  const errors: MovieFormValidationErrors = {};
  if (!values.title) {
    errors.title = 'Title is missing';
  }
  return errors;
};

export default R.compose(
  connect(null, {
    onSubmit: voteMovie,
    onSubmitSuccess: () => reset('newMovie'),
  }),
  reduxForm({
    form: 'newMovie',
    fields: ['title'],
    validate: validateForm,
  }),
)(MovieForm);
