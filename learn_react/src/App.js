import React from 'react';
import logo from './logo.svg';
import './App.css';
// import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
// const tags = ['恐龙', '足球小子']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LikesButton />
    </div>
  );
}

export default App;
