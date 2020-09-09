import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

 class App extends Component {
    state = {
      persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
      ]
    };

  switchNameHandler = (newName) => {
      /* console.log('was clicked'); */
      // DONT DO THIS -> this.state.person[0].name = 'Maximilian';
      this.setState({ 
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
       ]
     })
    }

    nameChangedHandler = (event) => {
      this.setState( {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie', age: 26 }
        ]
      })
    }

   render () {
     const style = {
       backgroundColor: 'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer'
     };
     
     return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>
            Switch Name
        </button>

        {/* Assim que se reutiliza um component */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')} 
          changed={this.nameChangedHandler} >My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}  />
      </div>
    );
 }
    /*
    Os dois códigos são a mesma coisa mas escrita de maneiras diferentes
    A maneira de cima é mais economica e por isso mais usada
    return React.createElement(
      "div",
      null,
      React.createElement("h1", { className: "App" }, "Hi, I am a React App") 
    );*/
}


export default App;
