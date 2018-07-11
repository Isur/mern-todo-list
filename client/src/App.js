import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import ToDoList from './components/ToDoList';
import AddItemForm from './components/AddItemForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AddItemForm />
        <ToDoList />
      </div>
      </Provider>
    );
  }
}



export default App;
