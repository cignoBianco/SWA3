import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleCompleted,
  updateListTodo,
  deleteTodo,
  updateListImportance,
  setDueDate,
} from '../../actions';
import './Todo.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DueDateButton from './DueDateButton';

const ListTodo = props => {
  const dispatch = useDispatch();
  const datepicker = useRef();

  const onToggleCompleted = (listId, todoId) => {
    dispatch(toggleCompleted(listId, todoId));
  };

  const onDueDateSelect = (listId, todoId, dueDate) => {
    dispatch(setDueDate(listId, todoId, dueDate));
  };

  const [isImporant, setImportance] = useState(0);

  const onUpdateListTodo = (listId, todoId, e) => {
    
    dispatch(updateListTodo(listId, todoId, e.target.textContent));
  };

  const onUpdateListImportance = (listId, todoId, important) => {
    
    dispatch(updateListImportance(listId, todoId, important));
  };

  const { listId, todo, isImportant } = props;

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const datified = new Date(todo.dueDate);
  const today = new Date();
  const dueDate = (() => {
    if (todo.dueDate) {
      return `${
        months[datified.getMonth()]
      } ${datified.getDate()}, ${datified.getFullYear()}`;
    }
    return null;
  })();

  const renderDueDate = (() => {
    if (
      dueDate &&
      datified.getFullYear() === today.getFullYear() &&
      datified.getMonth() === today.getMonth() &&
      datified.getDate() === today.getDate()
    ) {
      return (
        <div className="duedate">
          <strong style={{ color: 'dodgerblue' }}>Due today! </strong>
        </div>
      );
    } else if (
      dueDate &&
      datified.getFullYear() === today.getFullYear() &&
      datified.getMonth() === today.getMonth() &&
      datified.getDate() === today.getDate() + 1
    ) {
      return (
        <div className="duedate">
          <strong style={{ color: 'dodgerblue' }}>Due tomorrow! </strong>
        </div>
      );
    } else if (dueDate && datified >= today) {
      return (
        <div className="duedate">
          <strong>Due on: </strong> {dueDate}
        </div>
      );
    } else {
      return (
        <div className="duedate" style={{ color: 'tomato' }}>
          <strong style={{ color: 'red' }}>Was due on: </strong> {dueDate}
        </div>
      );
    }
  })();
  
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
        <DatePicker
            customInput={<DueDateButton />}
            onChange={dueDate => onDueDateSelect(listId, todo.id, dueDate)}
            withPortal
            popperModifiers={{
              offset: {
                enabled: true,
                offset: '20px, 0px'
              }
            }}
            shouldCloseOnSelect={true}
            ref={datepicker}
            minDate={new Date()}
          >
            <div style={{ clear: 'both', padding: 5 }}>
              <button
                className="button is-info clear-btn"
                onClick={() => {
                  onDueDateSelect(listId, todo.id, null);
                  datepicker.current.setOpen(false);
                }}
              >
                Clear
              </button>
            </div>
          </DatePicker>
        
            
          <li
            className="delete-btn"
            title="Delete Todo"
            
          >
            <i onClick={() => dispatch(deleteTodo(listId, todo.id))} className="fas fa-trash" /> &nbsp; Delete Todo
          </li>
        </ul>
      </div>
      {todo.dueDate ? renderDueDate : null}
    </div>
  );
};

export default ListTodo
