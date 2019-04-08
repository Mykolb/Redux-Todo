import React, { Component } from 'react';
import './App.css';

//import components//
import ToDoList from './components/ToDoList';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ToDoList />
      </div>
    );
  }
}

export default App;
