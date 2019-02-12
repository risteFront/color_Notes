import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      textInput :''
    }
  }
  render() {
    return (
      <div className="App">
        <div>
         <label className="label" htmlFor="male">Note Text</label>
         <input placeholder="Enter a text body" type="text"></input>
         <label className="label" htmlFor="male">Note Color</label>
         <select>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Purple</option>
          <option>Yellow</option>
         </select>
        </div>
      </div>
    );
  }
}

export default App;
