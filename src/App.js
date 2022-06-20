import logo from "./assets/favicon.png";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome!</p>
        <a
          className="App-link"
          href="https://github.com/Adobatto-Ariel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
