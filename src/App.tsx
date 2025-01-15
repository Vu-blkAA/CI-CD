import './App.css';
import logo from './logo.svg';

const TECH_DOMAIN = import.meta.env.VITE_TECH_DOMAIN;

function App() {
  console.log('tech domain', TECH_DOMAIN);
  console.log('env', import.meta.env);

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
        <p>Build Number: 1.6</p>
      </header>
    </div>
  );
}

export default App;
