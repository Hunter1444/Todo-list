import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

var tasks;

if(JSON.parse(localStorage.getItem("tasks")) !== null){
  tasks = JSON.parse(localStorage.getItem("tasks"));
}else{
  tasks = []
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function reducer(state = tasks, action){
  if(action.type === "ADD_TODO"){
    return [
      ...state,
      action.payload
    ]
  }
  else if(action.type === "TASK_DONE"){
    for(var key in state){
      if(action.payload === state[key]['name']){
        state[key]['done'] = true
      }
    }
    return [
      ...state
    ]
  }
  return state
}

store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
