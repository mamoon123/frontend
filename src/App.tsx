import React from 'react';
import './App.css';
import GenerateToken from "./components/generate-token";
import TokenValidator from "./components/token-validator";

function App() {
  return (
    <div className="App">
       <GenerateToken />
        <TokenValidator />
    </div>
  );
}

export default App;
