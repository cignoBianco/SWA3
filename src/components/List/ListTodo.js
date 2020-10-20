import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleCompleted,
  updateListTodo,
  deleteTodo,
  updateListImportance
} from '../../actions';
import './Todo.css'

const ListTodo = props => {
  const dispatch = useDispatch();

  const onToggleCompleted = (listId, todoId) => {
    dispatch(toggleCompleted(listId, todoId));
  };

  const [isImporant, setImportance] = useState(0);

  const onUpdateListTodo = (listId, todoId, e) => {
    
    dispatch(updateListTodo(listId, todoId, e.target.textContent));
  };

  const onUpdateListImportance = (listId, todoId, important) => {
    
    dispatch(updateListImportance(listId, todoId, important));
  };

  const { listId, todo, isImportant } = props;

  
  return (
    <div
      className={`ListTodo panel-block ${todo.completed ? 'is-active' : ''}`}
      key={todo.id}
      data-id={todo.id}
    >
      <span className="handle-list-todo">
        <i className="fas fa-grip-vertical" />
      </span>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={() => onToggleCompleted(listId, todo.id)}
      />
      <span
        style={todo.completed ? { textDecoration: 'line-through' } : null}
        contentEditable={true}
        className="editable-list-todo"
        suppressContentEditableWarning={true}
        spellCheck={false}
        onBlur={e => {onUpdateListTodo(listId, todo.id, e)}}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onUpdateListTodo(listId, todo.id, e);
            e.target.blur();
          }
        }}
      >
        {todo.todoTodo}
      </span>
        {todo.important ? 'important' : 'ordinary'}<br/>
      <span>
        important?
        <input type="checkbox" checked={todo.important}
           onClick={(e) => {
          onUpdateListImportance(listId, todo.id, !todo.important)
      }}  name="important" value="important" />
      </span>
      <div className="action-btns" tabIndex="0">
        <i className="fas fa-ellipsis-v" />
        <ul>
            <div style={{ clear: 'both', padding: 5 }}>
              <button
                className="button is-info clear-btn"
                onClick={() => dispatch(deleteTodo(listId, todo.id))}
              >
                Clear
              </button>
            </div>
          <li
            className="delete-btn"
            title="Delete Todo"
            
          >
            <i onClick={() => dispatch(deleteTodo(listId, todo.id))} className="fas fa-trash" /> &nbsp; Delete Todo
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ListTodo
