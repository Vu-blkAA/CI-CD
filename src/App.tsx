import './App.css';
import logo from './logo.svg';

const TECH_DOMAIN = import.meta.env.VITE_TECH_DOMAIN;
const HRM_DOMAIN = import.meta.env.VITE_HRM_DOMAIN;
const HRM_TECH_DOMAIN = import.meta.env.VITE_HRM_TECH_DOMAIN;

function App() {
  console.log('tech domain', TECH_DOMAIN);
  console.log('hrm domain', HRM_DOMAIN);
  console.log('hrm tech domain', HRM_TECH_DOMAIN);
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
          Hi i'm Trey, I'm a software engineer. I'm learning how to deploy a react app to AWS S3. Something went wrong. 1
        </a>
      </header>
    </div>
  );
}

export default App;
