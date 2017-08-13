/* @flow */
import { reduxForm } from 'redux-form';
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

export default reduxForm({
  form: 'newMovie',
  fields: ['title'],
  validate: validateForm,
  onSubmit: (values) => {
    console.log('submitting value', values);
  },
})(MovieForm);
