import React from 'react'
import 'todomvc-app-css/index.css'
import './App.css'

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
          />
        </header>
      </div>
    )
  }
}

