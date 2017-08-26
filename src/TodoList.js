import React, { Component } from 'react';
import SingleTodo from './SingleTodo';


export default class todoList extends Component{

  compareDate(date){
    let currDate = new Date();
    let dayNumb = currDate.getDate();
    String(dayNumb).length === 1 ? dayNumb = '0' + dayNumb : '';
    let month = currDate.getMonth() + 1;
    String(month).length === 1 ? month = '0' + month : '';
    let year = currDate.getFullYear();
    currDate = `${year}-${month}-${dayNumb}`;

    return date === currDate
  }

  render(){
    let tasksList = this.props.taskList.map((item, index) => {
      var result = this.compareDate(item.date);
      if(result){
        return(
          <SingleTodo key={index} name={item.name} date={item.date} done={item.done}/>
        )
      }else{
        return null
      }
    })

    var emptyList = tasksList.every(function(item){
      return item === null;
    });

    return(
      <ul ref="todoList" className="todo-list__wrap">
        {tasksList}
        {emptyList ? <li className="empty-list">На сегодня задач нет</li>: ''}
      </ul>
    )
  }
}
