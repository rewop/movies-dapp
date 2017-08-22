import styled from 'styled-components';
import { Field } from 'redux-form';

const TextInput = styled(Field).attrs({ type: 'text', component: 'input' })`
  padding: 0.8em;
  border-style: none;
  border: 1px solid #dedede;
  border-radius: 5px;
  display: ${({ block }) => (block ? 'block' : null)};
  width: ${({ block }) => (block ? '100%' : null)};
`;

export default TextInput;
