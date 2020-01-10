import React from 'react';
import logo from './logo.svg';
import './App.css';
import movie from './movies/earth.mov';


function App() {
  return (
    <div>
      {/*<header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        <video
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: 0
        }}
        autoPlay loop muted>
        <source src={movie}  />
        </video>
{/*
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
        </a>*/}
      {/*</header>*/}
    </div>

  );
}

export default App;
