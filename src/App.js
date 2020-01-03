import React from 'react';
import logo from './kcLogo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Kayden's Portfolio site
        </p>
        <a
          className="App-link"
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Kayden's App
        </a>
      </header>
    </div>
  );
}

export default App;
