import {
  LOAD_SAVED_STATE,
  TOGGLE_COMPLETED,
  ADD_TODO,
  DELETE_TODO,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  SHOW_ALL,
  UPDATE_LIST_TITLE,
  DELETE_LIST,
  ADD_LIST,
  UPDATE_LIST_TODO,
  DELETE_ALL_LISTS,
  UPDATE_LIST_IMPORTANCE,
  SHOW_IMPORTANT,
  SET_DUE_DATE
} from '../actions/types';

const storedListId = +JSON.parse(localStorage.getItem("listId"));
let listId = storedListId || 0;
let todoId =  0;
let userId = JSON.parse(localStorage.getItem("user")) || '';

export const loadSavedState = savedState => ({
  type: LOAD_SAVED_STATE,
  payload: savedState
});

export const toggleCompleted = (listId, todoId) => ({
  type: TOGGLE_COMPLETED,
  payload: {
    listId,
    todoId
  }
});

export const addTodo = (newTodo, listId) => ({
  type: ADD_TODO,
  payload: {
    newTodoId: listId+''+todoId++,
    newTodo,
    listId,
    important: 0
  }
});


export const deleteTodo = (listId, todoId) => ({
  type: DELETE_TODO,
  payload: {
    listId,
    todoId
  }
});

export const showActive = listId => ({
  type: SHOW_ACTIVE,
  payload: listId
});

export const showImportant = listId => ({
  type: SHOW_IMPORTANT,
  payload: listId
});

export const showCompleted = listId => ({
  type: SHOW_COMPLETED,
  payload: listId
});

export const showAllAbsolutly = listId => ({
  type: SHOW_ALL,
  payload: listId
});

export const showAll = (listId, userId) => ({
  type: SHOW_ALL,
  payload: listId, userId
});

export const updateListTitle = (listId, newTitle) => ({
  type: UPDATE_LIST_TITLE,
  payload: {
    listId,
    newTitle
  }
});

export const deleteList = listId => ({
  type: DELETE_LIST,
  payload: listId
});

export const addList = () => ({
  type: ADD_LIST,
  payload: [listId++, userId]
});
localStorage.setItem('listId', JSON.stringify(listId));


export const updateListTodo = (listId, todoId, newTodo) => ({
  type: UPDATE_LIST_TODO,
  payload: {
    listId,
    todoId,
    newTodo
  }
});

export const updateListImportance = (listId, todoId, important) => ({
  type: UPDATE_LIST_IMPORTANCE,
  payload: {
    listId,
    todoId,
    important
  }
});

export const deleteAllLists = () => ({
  type: DELETE_ALL_LISTS
});
 
export const setDueDate = (listId, todoId, dueDate) => ({
  type: SET_DUE_DATE,
  payload: {
    listId,
    todoId,
    dueDate
  }
});
