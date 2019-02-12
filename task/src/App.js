import React, { Component } from 'react';
import './App.css';
const cards = [
  {name:'this is a simple test' ,class:'red',text:"Welcome to the awesome website"},
  {name:'this is a simple test', class:'green',text:"Here we listed some dommy data,"},
  {name:'this is a simple test',class:'blue',text:"Lorem Ipsum will be great to paste here"}

]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      textInput :'',
      color:'blue',
      cards:cards
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this)
  }
  handleChange(e){
    let color = e.target.value;
    this.setState((state)=>{
      state.color = color
    })

  }
  addCards(color,bodyText){
    const data = [...this.state.cards]
    let res = data.concat({
      name:color,
      class:color,
      text:bodyText
    })
    this.setState({
      cards:res
    })
  }

  handleChangeText(text){
    this.setState({
      textInput:text.target.value
    })
  }
  render() {
    let res = [];
     this.state.cards.forEach((data,i)=>{
      let classBorder = 'cards ';
      classBorder += [data.class];
      res.push(
          <div key={i} className={classBorder}>
              <h3 className="noteLeft" style={{color:data.class}}>NOTE {i + 1}</h3>
              <p style={{color:'rgb(97, 97, 97)'}}>{data.text}</p>
          </div>
      )
     
    })
    console.log(res)
    return (
      <div className="App">
        <div>
         <label className="label" htmlFor="male">Note Text</label>
         <input placeholder="Enter a text body" type="text" onChange={this.handleChangeText}></input>
         <label className="label" htmlFor="male">Note Color</label>
         <select value={this.state.color} onChange={this.handleChange}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="yellow">Yellow</option>
         </select>
         <button  disabled={!this.state.textInput} onClick={()=>this.addCards(this.state.color, this.state.textInput)}>ADD NOTE</button>
        </div>
          {res}
      </div>
    );
  }
}

export default App;
