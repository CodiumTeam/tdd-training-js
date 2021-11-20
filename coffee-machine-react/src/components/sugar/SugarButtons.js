import React from 'react';

import './sugar-buttons.css';

function SugarButtons() {
  return (
    <>
      <img src="/sugar-clipart-md.png" className="sugar-image" alt="Sugar" />
      <div className="sugar-buttons">
        <button className="small">-</button>
        <p>0</p>
        <button className="small">+</button>
      </div>
    </>
  );
}

export default SugarButtons;
