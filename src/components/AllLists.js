import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List/List';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EmptyTodoMessage from './EmptyTodoMessage'

const AllLists = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  return (
    <>
    <Container>
      <div class="flex">
        {lists.map(list => {
          return (
              <List key={list.id} list={list} visibility={list.visibility} />
            );
        })}
        
      </div>
    </Container>
      {lists.length === 0 ? <EmptyTodoMessage message={'No lists'} link={['Superhero Lists', '/concepts/superhero-lists']} button={['create', '/lists']} /> : null}
    </>
  );
};

export default AllLists;
