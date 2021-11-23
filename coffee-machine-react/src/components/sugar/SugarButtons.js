import React from 'react';

import './sugar-buttons.css';

function SugarButtons({ onAddSugar, onRemoveSugar }) {
  return (
    <>
      <p>Sugar</p>
      <div className="sugar-buttons">
        <button className="small" onClick={onRemoveSugar}>
          -
        </button>
        <p>0</p>
        <button className="small" onClick={onAddSugar}>
          +
        </button>
      </div>
    </>
  );
}

export default SugarButtons;
