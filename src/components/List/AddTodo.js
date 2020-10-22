import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo as add } from '../../actions';

const AddTodo = props => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const onAddTodo = (listId, e) => {
    e.preventDefault();
    dispatch(add(newTodo, listId));
    setNewTodo('');
  };

  const { listId } = props;

  return (
    <div className="panel-block">
      <form
        className="control has-icons-left"
        onSubmit={e => onAddTodo(listId, e)}
      >
        <input
          type="text"
          className="input is-small"
          placeholder="Add Todo"
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo}
        />
      </form>
    </div>
  );
};

export default AddTodo
