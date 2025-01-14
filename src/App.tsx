import './App.css';
import logo from './logo.svg';

const TREY_LINK = import.meta.env.VITE_HRM_GOOGLE;
const TECH_DOMAIN = import.meta.env.VITE_TREY_DOMAIN;

function App() {
  console.log('environment', TREY_LINK);
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
          href={TREY_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi i'm Trey, I'm a software engineer. I'm learning how to deploy a react app to AWS S3
        </a>
      </header>
    </div>
  );
}

export default App;
