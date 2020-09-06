import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
      </div>
    );
    /*
    Os dois códigos são a mesma coisa mas escrita de maneiras diferentes
    A maneira de cima é mais economica e por isso mais usada
    return React.createElement(
      "div",
      null,
      React.createElement("h1", { className: "App" }, "Hi, I am a React App") 
    );*/
  }
}

export default App;
