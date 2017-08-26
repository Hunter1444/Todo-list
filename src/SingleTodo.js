import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleTodo extends Component{

  changeDoneHandler(){
    this.props.todoDone(this.props.name)
  }


  render(){
    var classState = this.props.done ? 'todo-list__item_done' : ''
    var liClasses = `${classState} todo-list__item`;
      return(
        <li className={liClasses}>
          <label onClick={this.changeDoneHandler.bind(this)}>
            <span  className="todo-list__name">{this.props.name}</span>
            <input className="todo-list__input" type="radio"/>
            <b className="todo-list__fake-input"></b>
          </label>
        </li>
      )
    }
  }


export default connect(
  state => ({
    todoList: state
  }),
  dispatch => ({
    todoDone: (todoName) => {
      dispatch({type:"TASK_DONE", payload:todoName})
    }
  })
)(SingleTodo)
