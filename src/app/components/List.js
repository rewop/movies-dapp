import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  padding: 20px 10px;
  background-color: ${({ secondary }) => (secondary ? '#fcfcfc' : '#fefefe')};
  border-radius: 6px;
  overflow: hidden;
  margin: 0;
  margin-bottom: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 1em 0;
  border-top: 1px solid #dddddd;
  &:last-child {
    border-bottom: 1px solid #dddddd;
  }
`;

const ListTitleAction = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;

const ListTitle = styled(({ title, rightAction, ...rest }) =>
  (<h2 {...rest}>
    {title}
    {Boolean(rightAction) &&
      <ListTitleAction right>
        {rightAction}
      </ListTitleAction>}
  </h2>),
)`
  position: relative;
  margin: 1em 0;
  &:first-child {
    margin-top: 0;
  }
`;

List.Item = ListItem;
List.Title = ListTitle;

export { ListItem, ListTitle };

export default List;
