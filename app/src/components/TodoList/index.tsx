import React from 'react';
import { ListGroup } from 'reactstrap';
import { Todo } from '../index';

interface Props {
  todos: [];
}

const TodoList = ({ todos }: Props) => {
  return (
    <ListGroup>
      <Todo/>
    </ListGroup>
  );
};

export default TodoList;