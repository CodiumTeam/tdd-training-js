import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoffeeMachine from './CoffeeMachine';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <div className="root">
      <img
        src="http://www.codium.team/img/resources/codium-icon-black.svg"
        alt="Codium Team"
        title="Codium team"
      />
      <h1>Coffee Machine Kata</h1>
      <CoffeeMachine />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
