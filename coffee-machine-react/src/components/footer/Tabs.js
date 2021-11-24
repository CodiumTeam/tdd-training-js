import React, { useState } from 'react';

import './tabs.css';

const Tabs = ({ selected, children }) => {
  const [tabSelected, setTabSelected] = useState(selected);

  const handleChange = (index) => {
    setTabSelected(index);
  };

  return (
    <div>
      <ul className="inline">
        {children.map((elem, index) => {
          let style = index === tabSelected ? 'selected' : '';
          return (
            <li
              className={style}
              key={index}
              onClick={() => {
                handleChange(index);
              }}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <div className="tab">{children[tabSelected]}</div>
    </div>
  );
};

const Tab = ({ children, title }) => {
  return <div>{children}</div>;
};

Tabs.Tab = Tab;

export default Tabs;
