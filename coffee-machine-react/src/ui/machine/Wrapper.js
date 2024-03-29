import React from 'react';
import CoffeeCup from '../coffee/CoffeeCup';

import './wrapper.css';

function MachineWrapper({ children }) {
  return (
    <div className="machine">
      <div className="machine-top-container">
        <div className="machine-top"></div>
      </div>
      <div className="cup-wrapper">
        <CoffeeCup />
      </div>
      <div className="drink-maker">{children}</div>
    </div>
  );
}

export default MachineWrapper;
