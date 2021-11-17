import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  function handleChange(event) {
    if (event.key === "Enter") {
      const newItem = event.target.value;
      setItems([...items, newItem]);
    }
  }

  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
      </header>
      <input type="text" placeholder="What needs to be done?" onKeyPress={handleChange}/>
      <ul className="todo-list">
        <li>Learn TDD</li>
        <li>Start writing a test</li>
        { items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
