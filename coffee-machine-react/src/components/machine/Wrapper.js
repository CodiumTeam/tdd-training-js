import React from 'react';
import CoffeeCup from '../coffe/CoffeeCup';

import './wrapper.css';

function MachineWrapper({ children }) {
  return (
    <div className="machine">
      {children}
      <div className="cup-wrapper">
        <CoffeeCup />
      </div>
    </div>
  );
}

export default MachineWrapper;
