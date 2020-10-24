import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, deleteAllLists } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  const renderDeleteAllModal = (
    <div>
      <h3>Delete all lists</h3>
      <button onClick={() => dispatch(deleteAllLists())}>Delete</button>
    </div>
  );

  return (
    <>
      <div>
        <div>
          <div>
                <h1>Todo App</h1>
              <div>
                <button onClick={() => dispatch(addList())} >
                  <span>Add New List</span>
                </button>
              </div>
          </div>
        </div>
      </div>
      {lists.length > 0 ? renderDeleteAllModal : ''}
    </>
  );
};

export default Header;
