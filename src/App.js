import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { API_ROOT } from './appsettings.js';

class App extends Component {

  componentWillMount = () => {
    axios.get(API_ROOT + '/dummy')
      .then(response => {
        console.log('Got response:', response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
