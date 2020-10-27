import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, deleteAllLists } from '../actions';
import EmptyTodoMessage from './EmptyTodoMessage'
import { Button, Modal, Space } from 'antd'
import {  ExclamationCircleOutlined  } from '@ant-design/icons'
import './layout.css'
import Config from './../Config'
import { useTranslation } from "react-i18next";
//const { t, i18n } = useTranslation();
// {t("")}

const Header = () => {

  const { t, i18n } = useTranslation();
  // {t("")}

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
      <span>{t("buttons.delete")}</span>
    </Button>
    </div>
  );

  const CreateButton = () => { 
    return <Button type="primary" onClick={() => {dispatch(addList())
     /* fetch(`${Config('ApiUrl')}lists`, {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 
          JSON.stringify(JSON.parse('{"color": 0, "name": "string","priority": "HIGH" }'))
        
      })
      .then(res => res.json())
      .then(
        (result) => {
        console.log(result)
           //  lists=  result.items
         
        },
        (error) => {
          console.log(error)
          
        }
      ).catch((e) => console.log(e))*/
    }} >
      <span>{t("buttons.add")}</span>
    </Button>
  }

  function confirm() {
    let res = Modal.confirm({
      title: `${t("buttons.confirm")}`,
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure?',
      okText: `${t("buttons.confirm")}`,
      cancelText: `${t("buttons.cancel")}`,
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
      {lists.length < 1 ? <EmptyTodoMessage message={'No lists'} link={['Superhero Lists', '/concepts/superhero-lists']} button={[`${t("buttons.create")} List`, '/lists']} clk={() => dispatch(addList())} /> : ''}
      { noLists ? <EmptyTodoMessage message={'No lists'} link={['Superhero Lists', '/concepts/superhero-lists']} button={[`${t("buttons.create")} List`, '/lists']} clk={() => dispatch(addList())} />
    : renderDeleteAllModal }
    </>
  );
};

export default Header
