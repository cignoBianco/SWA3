import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo as add } from '../../actions';
import {  Input } from 'antd';
import { 
  EditOutlined
 } from '@ant-design/icons';
 import { useTranslation } from "react-i18next";
//const { t, i18n } = useTranslation();
// {t("")} 

const AddTodo = props => {

  const { t, i18n } = useTranslation();
// {t("")} 

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
        <Input
          prefix={<EditOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          type="text"
          className="input is-small"
          placeholder={t("forms.signup.labels.AddTodo")} 
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo}
        />
      </form>
    </div>
  );
};

export default AddTodo
