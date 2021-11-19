import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="root">
      <img
        src="http://www.codium.team/img/resources/codium-icon-black.svg"
        alt="Codium Team"
        title="Codium team"
      />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
