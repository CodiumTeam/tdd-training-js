import React from 'react';

import './machine-message.css';

function MachineMessage({ message }) {
  return (
    <div role="alert" className="message">
      <p>{message}</p>
    </div>
  );
}

export default MachineMessage;
