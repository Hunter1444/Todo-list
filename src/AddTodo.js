import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component{
  constructor(props){
    super(props);
    this.state = {
      popUpOpen: false
    }
  }

  openPopUp(){
    this.setState({
      popUpOpen: true
    })
  }

  closePopUp(){
    this.setState({
      popUpOpen: false
    })
  }

  addTodo(e){
    e.preventDefault()
    var todo = this.refs.todo;
    var date = this.refs.date;
    var obj = {
      name: todo.value,
      date: date.value,
      done: false
    }
    this.props.onAddTodo(obj);
    date.value = '';
    todo.value = '';

    this.closePopUp();
  }

  render(){
    var activePopUp = this.state.popUpOpen ? 'popUp_active' : '';
    var classPopUp = `${activePopUp} popUp`
    return(
      <div>
        <button onClick={this.openPopUp.bind(this)} className="add-todo">
          +
        </button>
        <div className={classPopUp}>
          <b onClick={this.closePopUp.bind(this)} className="closePopUp">x</b>
          <form onSubmit={this.addTodo.bind(this)}>
            <input required ref="todo" placeholder="Задача" type="text"/>
            <input required ref="date" placeholder="Число" type="date"/>
            <input value="Поставить задачу" type="submit"/>
          </form>
        </div>
      </div>
    )
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
)(AddTodo)
