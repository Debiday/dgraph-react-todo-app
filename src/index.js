import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoApp from './TodoApp'
import TodoModel from './TodoModel'

const model = new TodoModel()

function render() {
  ReactDOM.render(
    <TodoApp model={model}/>,
    document.getElementById('root'),
  )
}
model.subscribe(render)
render()
