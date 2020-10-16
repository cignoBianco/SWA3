const lists = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.text,
                    items: []
                }
            ];
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    listId: action.listId,
                    text: action.text,
                    completed: false
                }
            ]
        case 'SHOW_ALL': 
            return [...state].map(list => {
                if (action.payload === list.id) {
                    list.visibility = 'all';
                    }
                return list;
            })
        case 'TOGGLE_TODO':
            return state.map(todo => 
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export default lists