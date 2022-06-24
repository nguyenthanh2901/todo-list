import React, { Component } from 'react';
import todoApi from './api/todoApi';
import './app.scss'
import Form from './components/form/Form';
import List from './components/list/List';

class App extends Component {
  initTodo = {id: undefined, name: '', status: undefined}
  state = {
    todos: [this.initTodo],
    todo: this.initTodo
  }

  renderData(todo) {
    const response = todoApi.get();
    this.setState({
      ...this.state,
      todos: response,
      todo: todo ? todo : this.state.dodo
    })
  }

  componentDidMount() {
    this.renderData();
  }

  render() {
    // console.log(this.state);
    return (
      <div className='App'>
        <div className='title'>Todo <strong>list</strong></div>
        <div className='todo-list'>
          <Form />
          <List todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;




