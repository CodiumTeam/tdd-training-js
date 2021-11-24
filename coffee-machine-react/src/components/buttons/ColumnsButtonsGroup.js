import React from 'react';

import './columns-buttons-group.css';

function ButtonsGroup({ children }) {
  const childrens = React.Children.toArray(children);

  return (
    <ul className="button-group">
      {childrens.map((child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
}

export default ButtonsGroup;
