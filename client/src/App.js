import React, { Component } from 'react';
import './App.css';

const Text = () => {
  return(
    <p> random tekst </p>
  );
}

const Button = () =>{
  return(
    <button> (Un)Done </button>
  );
}

const Task = () => {
  return(
    <div style={{display: "inline"}}>
    <Button /> <Text />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Task />
      </div>
    );
  }
}

export default App;
