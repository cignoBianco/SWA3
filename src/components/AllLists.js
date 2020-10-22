import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List/List';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AllLists = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  const renderEmptyTodoMessage = (
    <div className="section">
      <div className="container has-text-centered">
        You currently have no lists. Today is a great day to start a new todo
        list!
      </div>
    </div>
  );

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
      {lists.length === 0 ? renderEmptyTodoMessage : null}
    </>
  );
};

export default AllLists;
