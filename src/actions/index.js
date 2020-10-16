let nextTodoId = 0
let nextListId = 0

export const getStoredState = storedState => ({
    type: 'GET_STORED_STATE',
    data: storedState
})

export const addList = text => ({
    type: 'ADD_LIST',
    id: nextListId++,
    text
})

export const addTodo = (text, listId = 0) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    listId: listId,
    text
})

export const showAll = listId => ({
    type: 'SHOW_ALL',
    listId: listId
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id, listId) => ({
    type: 'TOGGLE_TODO',
    listId: listId,
    id
})

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}