import React from 'react';

import './sugar-buttons.css';

function SugarButtons({ onAddSugar, onRemoveSugar, levelOfSugar = 0 }) {
  return (
    <>
      <p>Sugar</p>
      <div className="sugar-buttons">
        <button className="small" onClick={onRemoveSugar}>
          -
        </button>
        <p>{levelOfSugar}</p>
        <button className="small" onClick={onAddSugar}>
          +
        </button>
      </div>
    </>
  );
}

export default SugarButtons;
