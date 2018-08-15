import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Form from './Form.js';

class App extends Component {
  getComponent(event) {
    return <Form/>;
  }
  render() {
    return (
      <div>
        <this.getComponent/>
      </div>
    );
  }
}

export default App;
