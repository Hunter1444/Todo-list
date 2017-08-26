import React, { Component } from 'react';

export default class CurrentDate extends Component{
  render(){
    let date = new Date();
    let dayNumb = date.getDate();
    let dayName = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    switch(dayName){
      case 0: dayName = "Воскресенье"
      break
      case 1: dayName = "Понедельник"
      break
      case 2: dayName = "Вторник"
      break
      case 3: dayName = "Среда"
      break
      case 4: dayName = "Четверг"
      break
      case 5: dayName = "Пятница"
      break
      case 6: dayName = "Суббота"
      break
      default: return false
    }
    switch(month){
      case 0: month = "Январь"
      break
      case 1: month = "Февраль"
      break
      case 2: month = "Март"
      break
      case 3: month = "Апрель"
      break
      case 4: month = "Май"
      break
      case 5: month = "Июнь"
      break
      case 6: month = "Июль"
      break
      case 7: month = "Август"
      break
      case 8: month = "Сентябрь"
      break
      case 9: month = "Октябрь"
      break
      case 10: month = "Ноябрь"
      break
      case 11: month = "Декабрь"
      break
      default: return true
    }
    month = month.slice(0,3)

    return(
      <div className="current-date">
        <div className="current-date__left">
         <span className="current-date__day-number">{dayNumb}</span>

         <div className="current-date__left_wrapper">
          <span className="current-date__month">{month}</span>
          <span className="current-date__year">{year}</span>
         </div>

        </div>

        <div className="current-date__right">
          <span className="current-date__day-name">{dayName}</span>
        </div>
      </div>
    )
  }
}
