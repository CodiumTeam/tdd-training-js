import React from 'react';
import Button from './Button';

function SmallButton({ text, onClick }) {
  return <Button small={true} text={text} onClick={onClick} />;
}

export default SmallButton;
