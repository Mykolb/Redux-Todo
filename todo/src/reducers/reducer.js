import {ADD_TODO, TOGGLE_ITEM} from '../actions';

const initialState = {
    todo: [
        {value: 'Walk the dog', completed: false},
        {value: 'Feed the cat', completed: false}
    ]
};

export const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case ADD_TODO:
        return {
          newTodo = [{
            value: action.payload,
            completed: false     
        }]
    
        };

        return {
            ...state,
            todo: [...state.todo, newTodo]
        };
    
        case TOGGLE_ITEM:
        return {
            ...state,
            todo: state.todo.map(todos, index) =>
            return
            action.payload === index
        }
    

        default: 
            return state;
    
    


    


