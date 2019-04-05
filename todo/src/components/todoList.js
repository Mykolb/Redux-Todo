import React from 'react';
import { connect } from 'react-redux'

//import name of actions//
import { addToDo, toggleItem } from '../actions';

class todoList extends React.Component {
    state = {
        newTodo: []
    };
}



//handleChanges = event => {}


//addTodo = event => {event}


//toggleItem = (event, index) => 


render() {
    return (
    <div className='todo-list'>
    <input
        type='text'
        value= {this.state.newTodo}
        onChange={this.handleChanges}
        placeholder='Add New Item'
    />
    </div>
    <button>Add Item</button>

    );
}

//mapStateToProps

//add connect function 