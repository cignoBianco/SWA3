import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, deleteAllLists } from '../actions';
import EmptyTodoMessage from './EmptyTodoMessage'
import { Button, Modal, Space } from 'antd'
import {  ExclamationCircleOutlined  } from '@ant-design/icons'
import './layout.css'

const Header = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  // TODO: show modal r u sure? if yes -> dispatch
  const renderDeleteAllModal = (
    <div className="buttonInHead" style={{right:'10em'}}>
    <Button type="primary" onClick={confirm} >
      <span>DeleteAllLists</span>
    </Button>
    </div>
  );

  const CreateButton = () => { 
    return <Button type="primary" onClick={() => dispatch(addList())} >
      <span>Add New List</span>
    </Button>
  }

  function confirm() {
    let res = Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure?',
      okText: "I'm sure",
      cancelText: 'cancel',
      onOk: () => {dispatch(deleteAllLists()); Modal.destroyAll();},
      destroyOnClose: true
    });
    console.log(res)
  }

  return (
    <>
      <div>
        <div>
          <div>
              <div className="buttonInHead">
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

export default Header
