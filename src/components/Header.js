import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, deleteAllLists } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  const renderDeleteAllModal = (
    <div>
      <h3>Delete all lists</h3>
      <p>Are you sure you want to delete all lists? This action is irreversible.</p>
      <button onClick={() => dispatch(deleteAllLists())}>Delete</button>
    </div>
  );

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="level">
                <h1 className="title">Todo App</h1>
                <p>еще нужна сортировка коллекций</p>
              
              <div className="level-item">
                <button
                  className="button is-success"
                  onClick={() => dispatch(addList())}
                >
                  <span className="icon">
                    <i className="fas fa-plus" />
                  </span>
                  <span>Add New List</span>
                </button>
              </div>
          </div>
        </div>
      </div>
      {renderDeleteAllModal}
    </>
  );
};

export default Header;
