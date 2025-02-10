import './App.css';
import logo from './logo.svg';

const TECH_DOMAIN = import.meta.env.VITE_TECH_DOMAIN;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={TECH_DOMAIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi i'm Trey, I'm a software engineer. I'm learning how to deploy a react app to AWS S3.
        </a>
        <p>Tag Number: v1.0.3</p>
      </header>
    </div>
  );
}

export default App;
