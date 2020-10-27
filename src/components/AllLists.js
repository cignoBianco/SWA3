import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List/List';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const AllLists = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  return (
    <>
    <Container>
      <div className="flex">
        {lists.map(list => {
          if (list.userId === currentUser)
          return (
              <List key={list.id} list={list} visibility={list.visibility} />
            );
        })}
        
      </div>
    </Container>
      
    </>
  );
};

export default AllLists;
