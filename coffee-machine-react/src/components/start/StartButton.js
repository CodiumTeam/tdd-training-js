import React from 'react';

import './start-button.css';

function StartButton({ disabled }) {
  return (
    <div className="start-wrapper">
      <button className="start" disabled={disabled}>
        Start
      </button>
    </div>
  );
}

export default StartButton;
