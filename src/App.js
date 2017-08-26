import React, { Component } from 'react';
import TodoList from './TodoList';
import CurrentDate from './CurrentDate';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="todo-list">
        <CurrentDate/>
        <TodoList taskList = {this.props.todoList}/>
        <AddTodo/>
      </div>
    );
  }
}

export default connect(
  state => ({
    todoList: state
  }),
  dispatch => ({
    onAddTodo: (todoName) => {
      dispatch({type:"ADD_TODO", payload:todoName})
    }
  })
)(App)
