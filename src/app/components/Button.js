import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;

  &:active,
  &:hover {
    outline: 0;
  }
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  }
  &:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  ${({ primary }) =>
    primary &&
    `
    color: #fff;
    background-color: #3ca2e0;
    border-color: #2698dd;
    &:hover {
      background-color: #2089c9;
      border-color: #1b74aa;
    }
  `} ${({ secondary }) =>
      secondary &&
      `
    color: #666666;
    background-color: transparent;
    border-color: none;
  `} ${({ circle }) =>
      circle &&
      `
    border-radius: 99%;
  `} ${({ lg }) =>
      lg &&
      `
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
  `};
`;

export default Button;
