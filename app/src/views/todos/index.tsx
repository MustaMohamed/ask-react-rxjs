import { Button, Container, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { ChangeEvent, useState } from 'react';

interface Props {

}

const Todos = (props: Props) => {
  
  const [todo, setTodo] = useState('');
  
  const onTodoTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTodo(val);
  };
  
  return (
    <Container className={'my-3'}>
      <h2>Todos</h2>
      <Label for="exampleEmail">Add new todo</Label>
      <InputGroup>
        <Input value={todo} onChange={onTodoTextChange}/>
        <InputGroupAddon addonType="append">
          <Button color="secondary">Add</Button>
        </InputGroupAddon>
      </InputGroup>
    </Container>
  );
};

export default Todos;