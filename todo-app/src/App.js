import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
      </header>
      <input type="text" placeholder="What needs to be done?"/>
      <ul>
        <li>Learn TDD</li>
        <li>Start writing a test</li>
      </ul>
    </div>
  );
}

export default App;
