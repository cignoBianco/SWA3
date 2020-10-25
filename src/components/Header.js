import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, deleteAllLists } from '../actions';
import EmptyTodoMessage from './EmptyTodoMessage'
import { Button } from 'antd'

const Header = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  const renderDeleteAllModal = (
    <div>
      <h3>Delete all lists</h3>
      <button onClick={() => dispatch(deleteAllLists())}>Delete</button>
    </div>
  );

  const CreateButton = () => { 
    return <Button type="primary" onClick={() => dispatch(addList())} >
      <span>Add New List</span>
    </Button>
  }

  return (
    <>
      <div>
        <div>
          <div>
                <h1>Todo App</h1>
              <div>
                <CreateButton />
              </div>
          </div>
        </div>
      </div>
      {lists.length > 0 ? renderDeleteAllModal : ''}
      {lists.length === 0 ? <EmptyTodoMessage message={'No lists'} link={['Superhero Lists', '/concepts/superhero-lists']} button={['Create List', '/lists']} clk={() => dispatch(addList())} /> : null}
    </>
  );
};

export default Header;
