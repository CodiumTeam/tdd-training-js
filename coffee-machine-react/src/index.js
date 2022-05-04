import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoffeeMachine from './CoffeeMachine';

ReactDOM.render(
  <React.StrictMode>
    <div className="root">
      <img
        src="https://www.codium.team/img/codium-black-200x46.png"
        alt="Codium Team"
        title="Codium team"
      />
      <h1>Coffee Machine Kata</h1>
      <CoffeeMachine />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
