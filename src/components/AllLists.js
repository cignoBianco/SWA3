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
      <Row md={4}>
        {lists.map(list => {
          return (
            <Col>
              <List key={list.id} list={list} visibility={list.visibility} />
            </Col>);
        })}
        
      </Row>
    </Container>
      {lists.length === 0 ? <EmptyTodoMessage message={'No lists'} link={['Superhero Lists', '/concepts/superhero-lists']} button={['create', '/lists']} /> : null}
    </>
  );
};

export default AllLists;
