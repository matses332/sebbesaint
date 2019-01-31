import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './components/app.router';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: 'grey'}}>
        <AppRouter />
      </div>
    );
  }
}

export default App;