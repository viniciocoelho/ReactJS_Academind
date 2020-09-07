import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>

        {/* Assim que se reutiliza um component */}
        <Person name="max" age="28" />
        <Person name="manu" age="28">
          My Hobbies: Racing
        </Person>
        <Person name="stephanie" age="28" />
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
