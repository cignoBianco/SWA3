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
  const currentUser = localStorage.getItem('user')

console.log(1, lists)
let noLists = lists.reduce((ac, cur)=>{
  console.log(cur.userId, +currentUser)
  if(cur.userId == +currentUser) ac = 1
}, 0) > 0 ? 1 : 0

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
      {lists.length < 1 ? <EmptyTodoMessage message={'No lists'} link={['Superhero Lists', '/concepts/superhero-lists']} button={['Create List', '/lists']} clk={() => dispatch(addList())} /> : ''}
      { noLists ? <EmptyTodoMessage message={'No lists'} link={['Superhero Lists', '/concepts/superhero-lists']} button={['Create List', '/lists']} clk={() => dispatch(addList())} />
    : renderDeleteAllModal }
    </>
  );
};

export default Header
