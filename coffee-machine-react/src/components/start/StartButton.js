import React from 'react';

import './start-button.css';

function StartButton({ disabled, onClick }) {
  return (
    <div className="start-wrapper">
      <button className="start" disabled={disabled} onClick={onClick}>
        Start
      </button>
    </div>
  );
}

export default StartButton;
