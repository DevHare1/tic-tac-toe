import React from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <div>
          <Game />
        </div>
      </header>
    </div>
  );
}

export default App;
