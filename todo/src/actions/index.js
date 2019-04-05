export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';



export function addToDo(newTodo) {
    console.log(newTodo);
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export function toggleItem(index) {
    console.log('action', index)
    return {
        type: TOGGLE_ITEM,
        payload: index
    }
}