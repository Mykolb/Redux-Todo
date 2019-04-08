import React from 'react';
import { connect } from 'react-redux'

//import name of actions//
import { addToDo, toggleItem } from '../actions';

class ToDoList extends React.Component {
    state = {
        newTodo: []
    };
}


handleChanges = event => {
    this.setState({ newTodo: event.target.value });
}


addToDo = event => {
    event.preventDefault();
    this.props.addToDo(this.state.newTodo)
}


toggleItem = (event, index) => {
    event.preventDefault();
    this.props.toggleItem(this.state.index)
}

render() 
    return(
        <div className='todo-list'>
        <h2>Todo List</h2>
        <input
        type='text'
        value={this.state.newTodo}
        onChange={this.handleChanges}
        placeholder='Add new todo'
        />
        <button>Add Todo</button>
        </div>
    )



const mapStateToProps = state => {
console.log(state);
return {
 todo: state.reducer.ToDoList
    };
}
//add connect function 

export default connect(
    mapStateToProps,
    {addTodo, toggleItem})(ToDoList);

