import logo from './logo.svg';
import { useState } from "react";
import Home from "./components/Home.js";
import './App.css';
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);


  return (
    <div className="App">
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Home/>      
      </AuthContext.Provider>        
      {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
