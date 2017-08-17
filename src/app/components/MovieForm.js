/* @flow */
import React from 'react';
import { Field } from 'redux-form';
import type { FormProps } from 'redux-form';
import Button from './Button';

type MovieFormProps = FormProps;

const MovieForm = ({ handleSubmit, submitting }: MovieFormProps) =>
  (<form onSubmit={handleSubmit}>
    <h3>Add new movie</h3>
    <div>
      <Field name="title" component="input" type="text" placeholder="Movie name" />
    </div>
    <div>
      <Button onClick={handleSubmit} disabled={submitting}>
        Add movie
      </Button>
    </div>
  </form>);

export default MovieForm;
