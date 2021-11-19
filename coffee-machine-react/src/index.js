import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DrinkMaker from './DrinkMaker';

ReactDOM.render(
  <React.StrictMode>
    <div className="root">
      <img
        src="http://www.codium.team/img/resources/codium-icon-black.svg"
        alt="Codium Team"
        title="Codium team"
      />
      <DrinkMaker />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
