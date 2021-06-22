import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <FontAwesomeIcon icon={faGoogleDrive} />
          Font Awesome brand icon
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
    </div>
  );
}

export default App;
