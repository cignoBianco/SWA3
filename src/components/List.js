import React from 'react'
import { useDispatch } from 'react-redux';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Todo from './Todo'

const List = props => {

  const dispatch = useDispatch()

  const { id, text, todos } = props.list
  let message = ( todos.length < 1 ) ? 'There are no todos in your list' : ''

  return (
      <div>
        <AddTodo />
        <VisibleTodoList todos={todos} />
        <Footer />
      </div>
  )
}
  
export default List