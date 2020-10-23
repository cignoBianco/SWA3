import React, { useState } from 'react'
import {  Layout, Breadcrumb, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
//import Achieve from './Achieve';
import EmptyTodoMessage from './../EmptyTodoMessage'

const { Content, Footer } = Layout;


const Achievement = () => {
    
  const dispatch = useDispatch();
  const achievements = useSelector(state => state.achievements);

  return (
      <>
        {achievements && achievements.map(list => {
          return (
            
              {/*<List key={list.id} list={list} visibility={list.visibility} />*/}
            );
        })}
       
    
      {!achievements || achievements.length === 0 ? <EmptyTodoMessage message={'No achievements'} link={['Achievements', '/concepts/how-to-get-achievement']} button={['Continue rescue', '/']} /> : null}
     </>
  );
  
}

export default Achievement