import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Cconponent from './Cconponent';
import Menu from './Menu';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent />
        <Cconponent />
        <Menu />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world привіт всім їїї
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ALL
        </a>
      </header>
    </div>
  );
}

export default App;
