import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  Card } from 'antd';
import './../layout.css'
import {
  updateListTitle,
  updateListColor,
  deleteList,
  showActive,
  showImportant,
  showCompleted,
  showAll
} from '../../actions';
import { 
  CloseCircleOutlined, ArrowDownOutlined
 } from '@ant-design/icons';
import ListTodo from './ListTodo';
import AddTodo from './AddTodo';
import './List.css';
import EmptyTodoMessage from './../EmptyTodoMessage'
import Color from './../core/Color'
import { useTranslation } from "react-i18next";
//const { t, i18n } = useTranslation();
// {t("")} 

const List = props => {

  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const [showArrow, setShowArrow] = useState(0);

  const updateTitle = (listId, e) => {
    dispatch(updateListTitle(listId, e.target.textContent));
  };

  const updateColor = (listId, e) => {
    let newColor = e >= 5 ? 0 : ++e
    Color(newColor)
    dispatch(updateListColor(listId, newColor));
  };

  const { id, title, color, todos, visibility } = props.list;
  let message, filteredList, totalCompleted, progressPerc;

  const [clr, setClr] = useState(color);

  if (todos.length === 0) {
    message = <><EmptyTodoMessage message={t("card.todos")} link={[`${t("card.todos")}`, '/concepts/todos']} button={[`${t("buttons.create")}`, '#']}
     clk={() => {setShowArrow(1); setInterval(() => setShowArrow(0), 5400)}} />
      {showArrow ? <ArrowDownOutlined className="downArrow" /> : null}
    </>
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
        <EmptyTodoMessage message={visibility,` ${t("card.todos")}`} link={[visibility+` ${t("card.todos")}`, '/concepts/todos']}
          button={[`${t("buttons.create")}`, '#'+id]} clk={() => {dispatch(showActive(id))}} />
        <br />
        {visibility === 'active'
          ? `completed!`
          : null}
      </p>
    );
  }

  totalCompleted = todos.filter(todo => todo.completed).length;
  progressPerc = (totalCompleted / todos.length) * 100;
  if (progressPerc === 100) alert("success!")

  return (
    <div data-id={id} id={id}>

  <Card
    style={{ width: '100%', minWidth: 282.5, height: 380,
    borderTop: `15px solid ${Color(color)}`
  }} 
    title={(<span
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
    </span>)}
 
    extra={
      <div className="flex" style={{
        width: 30,
        alignItems: 'center'
      }}>
        <div onClick={e => updateColor(id, color)} style={{
          width: 13, height: 13, borderRadius: '50%', backgroundColor: `${Color(color+1)}`
        }}></div>
        <CloseCircleOutlined onClick={()=>dispatch(deleteList(id))} />
      </div>
    
  }
  > 
  
      <div className="panel">
        <p className="panel-heading">
          
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
            {t("card.filters.active")}
          </button>
          <button
            onClick={() => dispatch(showImportant(id))}
            className={visibility === 'important' ? 'is-active' : null}
          >
            {t("card.filters.important")}
          </button>
          <button
            onClick={() => dispatch(showCompleted(id))}
            className={visibility === 'completed' ? 'is-active' : null}
          >
             {t("card.filters.completed")}
          </button>
          <button
            onClick={() => dispatch(showAll(id))}
            className={visibility === 'all' ? 'is-active' : null}
          >
            {t("card.filters.all")}
          </button>
        </p>
        <div className="todoListWrapper"
        >
          {filteredList.map(todo => (
            <ListTodo todo={todo} listId={id} key={todo.id} />
          ))}
          
          {message}
        
        </div>

        

        <AddTodo listId={id} />
      </div>

      </Card>
    </div>
    
  );
};

export default List;
