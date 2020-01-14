import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayPost from "./components/DisplayPost"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <br />
        <DisplayPost />
      </header>
      <br />
    </div>
  );
}

export default App;
