import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'

const exampleTodoItems = [
  {
    completed: false,
    description: 'incomplete item'
  },
  {
    completed: true,
    description: 'Yes completed item'
  }
]

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="App-header mb-3" >
          <h2>Hasta la Lista</h2>
        </div>
        <TodoList items={ exampleTodoItems } />
     </main>
    );
  }
}

export default App;
