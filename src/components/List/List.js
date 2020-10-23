import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  updateListTitle,
  deleteList,
  showActive,
  showImportant,
  showCompleted,
  showAll
} from '../../actions';

import ListTodo from './ListTodo';
import AddTodo from './AddTodo';
import './List.css';

const List = props => {
  const dispatch = useDispatch();

  const updateTitle = (listId, e) => {
    dispatch(updateListTitle(listId, e.target.textContent));
  };

  const { id, title, todos, visibility } = props.list;
  let message, filteredList, totalCompleted, progressPerc;

  if (todos.length === 0) {
    message = <p className="list-msg">There are no todos in your list.</p>;
  }

  filteredList = todos.filter(todo => {
    if (visibility === 'active') {
      return !todo.completed;
    } else if (visibility === 'completed') {
      return todo.completed;
    } else if (visibility === 'important') {
      return todo.important;
    }
    return todo;
  });

  if (filteredList.length === 0 && todos.length !== 0) {
    message = (
      <p className="list-msg">
        There are no {visibility} todos in your list.
        <br />
        {visibility === 'active'
          ? `completed!`
          : null}
      </p>
    );
  }

  totalCompleted = todos.filter(todo => todo.completed).length;
  progressPerc = (totalCompleted / todos.length) * 100;

  return (
    <div className="column is-one-third List" data-id={id}>
      <div className="panel">
        <p className="panel-heading">
          <span className="handle-list">
            <i className="fas fa-grip-vertical" />
          </span>
          <span
            className="list-title"
            contentEditable={true}
            onBlur={e => updateTitle(id, e)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                updateTitle(id, e);
                e.target.blur();
              }
            }}
            suppressContentEditableWarning={true}
            spellCheck={false}
          >
            {title}
          </span>
        </p>
        <div className="progressbar-wrapper">
          <div
            className="progressbar"
            style={{
              width: `${progressPerc}%`,
              backgroundColor: `${
                progressPerc === 100 ? 'dodgerblue' : 'lightblue'
              }`
            }}
          />
        </div>
        <p className="panel-tabs">
          <button
            onClick={() => dispatch(showActive(id))}
            className={visibility === 'active' ? 'is-active' : null}
          >
            Active
          </button>
          <button
            onClick={() => dispatch(showImportant(id))}
            className={visibility === 'important' ? 'is-active' : null}
          >
            Important
          </button>
          <button
            onClick={() => dispatch(showCompleted(id))}
            className={visibility === 'completed' ? 'is-active' : null}
          >
            Completed
          </button>
          <button
            onClick={() => dispatch(showAll(id))}
            className={visibility === 'all' ? 'is-active' : null}
          >
            All
          </button>
        </p>
        <div
        >
          {filteredList.map(todo => (
            <ListTodo todo={todo} listId={id} key={todo.id} />
          ))}
        </div>

        {message}

        <AddTodo listId={id} />
      </div>

      <div>
          <h3>Delete list </h3>
          <button onClick={()=>dispatch(deleteList(id))}>Delete!</button>
      </div>
    </div>
  );
};

export default List;