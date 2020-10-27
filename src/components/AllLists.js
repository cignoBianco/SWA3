import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List/List';
import Container from 'react-bootstrap/Container';
import Config from './../Config'


const AllLists = () => {
  const dispatch = useDispatch();
  //let 
  const lists = useSelector(state => state.lists);
  const currentUser = JSON.parse(localStorage.getItem('user'));
/*
  useEffect(() => {
    fetch(`${Config('ApiUrl')}lists`)
      .then(res => res.json())
      .then(
        (result) => {
        console.log(result)
             lists=  result.items
         
        },
        (error) => {
          console.log(error)
          
        }
      )
  })*/

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
