import React, { Component } from 'react';
import './App.css';
import Modal from './modal';

const cards = [
  {name:'this is a simple test' ,class:'red',text:"Welcome to the awesome website", visible:false},
  {name:'this is a simple test', class:'green',text:"Here we listed some dommy data,",visible:false},
  {name:'this is a simple test',class:'blue',text:"Lorem Ipsum will be great to paste here", visible:false}

]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      textInput :'',
      color:'blue',
      cards:cards,
      isMouseInside:false,
      isShowing: false,
      textBody:''

    }
    this.mouseEnter = this.mouseEnter.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  handleChange(e){
    let color = e.target.value;
    this.setState({
      color : color
    })

  }
  handleUpdate(textInput,dataclass){
    let element = null
    let res =[...this.state.cards]
    let result = res.filter((data,ele)=>data.class == dataclass)
    let copy = res.forEach((data,index)=>{
      if(data.class == dataclass ){
         data.text = textInput
      }
    })
    console.log(copy)

  }
  addCards(color,bodyText){
    const data = [...this.state.cards]
    let res = data.concat({
      name:color,
      class:color,
      text:bodyText,
      visible:false
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
  mouseEnter(i) {
  let res = [...this.state.cards]
  let elementVisible = null
   let data =  res.forEach((element,index) => {
      if(index == i){
        elementVisible = element
      }
   })
   elementVisible.visible = true
    res[i] = elementVisible
    this.setState({cards:res});
  }
  mouseLeave(i){
    let res = [...this.state.cards]
    let elementVisible = null
     let data =  res.forEach((element,index) => {
        if(index == i){
          elementVisible = element
        }
     })
     elementVisible.visible = false
      res[i] = elementVisible
      this.setState({cards:res});
  }
  removeHandler = (i) =>{
    let res = [...this.state.cards]
    let data = res.filter((data,ind)=>ind !== i)
    console.log(data)
    this.setState({
      cards:data
    })
  }
  openModalHandler = (index) => {
    let textBodyModal = this.state.cards.filter((data,i)=>index == i)
    this.setState({
      isShowing: true,
      textBody:textBodyModal[0]
    })
  }

closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
}
  render() {
    let classInput = this.state.isShowing ? 'showing' : 'empty'
    let res = [];
     this.state.cards.forEach((data,i)=>{
    let classBorder = 'cards ' + [data.class];
    let edit = (
    <span>
      <i className="fa fa-pencil icon"
       onClick={()=>this.openModalHandler(i)}>
      </i>
      <i className="fa fa-trash icon2" onClick={()=>this.removeHandler(i)}></i>
   </span>);
      res.push(
          <div key={i} className={classBorder} onMouseEnter={()=>this.mouseEnter(i)} onMouseLeave={()=>this.mouseLeave(i)}>
          {data.visible === true?edit:null}
              <h3 className="noteLeft" style={{color:data.class}}>NOTE {i + 1}</h3>
              <p style={{color:'rgb(97, 97, 97)'}}>{data.text}</p>
          </div>
      )
    })
    return (
      <div className="App">
             { this.state.isShowing ?
    <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
      <Modal
          show={this.state.isShowing}
          close={this.closeModalHandler}
          inputText={this.state.textBody}
          backText={this.handleUpdate}
          classInput={classInput}>
    </Modal>
        <div className='indexFirst'>
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
