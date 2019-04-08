export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';



export const addToDo = newTodo => {
 console.log(newTodo);
    return {
        type: ADD_TODO,
        payload: newTodo
}
   
    }


export const  toggleItem = index =>  {
    console.log('action', index)
    return {
        type: TOGGLE_ITEM,
        payload: index
    }
}

//type gets passed as function name in todolist//