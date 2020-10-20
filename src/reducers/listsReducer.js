import {
  LOAD_SAVED_STATE,
  TOGGLE_COMPLETED,
  ADD_TODO,
  DELETE_TODO,
  SHOW_ACTIVE,
  SHOW_IMPORTANT,
  SHOW_COMPLETED,
  SHOW_ALL,
  UPDATE_LIST_TITLE,
  DELETE_LIST,
  ADD_LIST,
  UPDATE_LIST_TODO,
  DELETE_ALL_LISTS,
  UPDATE_LIST_IMPORTANCE
} from '../actions/types';

const listsReducer = (state = [], action) => {
  switch (action.type) {

    case LOAD_SAVED_STATE:
      return action.payload;

    case TOGGLE_COMPLETED: {
      const { listId, todoId } = action.payload;
      return [...state].map(list => {
        if (list.id === listId) {
          list.todos.map(listTodo => {
            if (listTodo.id === todoId) {
              listTodo.completed = !listTodo.completed;
            }
            return listTodo;
          });
        }
        return list;
      });
    }

    case ADD_TODO: {
      const { newTodoId, newTodo, listId } = action.payload;
      return [...state].map(list => {
        if (list.id === listId) {
          list.todos.push({
            id: newTodoId,
            todoTodo: newTodo,
            completed: false
          });
        }
        return list;
      });
    }

    case DELETE_TODO:
      return [...state].map(list => {
        if (list.id === action.payload.listId) {
          list.todos = list.todos.filter(
            todo => todo.id !== action.payload.todoId
          );
        }
        return list;
      });

    case SHOW_ACTIVE:
      return [...state].map(list => {
        if (action.payload === list.id) {
          list.visibility = 'active';
        }
        return list;
      });

    case SHOW_IMPORTANT:
    return [...state].map(list => {
      if (action.payload === list.id) {
        list.visibility = 'important';
      }
      return list;
    });

    case SHOW_COMPLETED:
      return [...state].map(list => {
        if (action.payload === list.id) {
          list.visibility = 'completed';
        }
        return list;
      });

    case SHOW_ALL:
      return [...state].map(list => {
        if (action.payload === list.id) {
          list.visibility = 'all';
        }
        return list;
      });

    case UPDATE_LIST_TITLE:
      return [...state].map(list => {
        if (action.payload.listId === list.id) {
          list.title = action.payload.newTitle;
        }
        return list;
      });

    case UPDATE_LIST_TODO:
      return [...state].map(list => {
        if (list.id === action.payload.listId) {
          list.todos = list.todos.map(todo => {
            if (todo.id === action.payload.todoId) {
              todo.todoTodo = action.payload.newTodo;
            }
            return todo;
          });
        }
        return list;
      });

      case UPDATE_LIST_IMPORTANCE:
        return [...state].map(list => {
          if (list.id === action.payload.listId) {
            list.todos = list.todos.map(todo => {
              if (todo.id === action.payload.todoId) {
                todo.important = action.payload.important;
              }
              return todo;
            });
          }
          return list;
        });

    case DELETE_LIST:
      return [...state].filter(list => list.id !== action.payload);

    case ADD_LIST:
      return [
        {
          id: action.payload,
          title: 'Click me to edit title',
          visibility: 'all',
          todos: []
        },
        ...state
      ];

    case DELETE_ALL_LISTS:
      return [];

    default:
      return state;
  }
};

export default listsReducer;
