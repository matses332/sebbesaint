import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './components/app.router';
import StartComponent from './components/start.component';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: 'darkgrey'}}>
      <div>
      <StartComponent/>
      </div>
      </div>
    );
  }
}

export default App;