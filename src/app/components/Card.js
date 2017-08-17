import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  padding: 20px 10px;
  background-color: ${({ secondary }) => (secondary ? '#fcfcfc' : '#fefefe')};
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 20px;
  ${({ centered }) => (centered ? 'text-align: center;' : '')};
`;

const CardTitle = styled.h2``;
const CardSubtitle = styled.h3`
  font-weight: 400;
  color: #777;
`;
const CardText = styled.p``;
const CardActions = styled.div`margin: 1em;`;

Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Actions = CardActions;

export default Card;
export { CardText, CardActions, CardTitle, CardSubtitle };
