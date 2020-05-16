import React, { Component } from 'react';
import './App.css';
import Child from './Child';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      name : 'Meenakshi',
      cname : 'Hey!! Google'
    }
  }
  handleChange = (event => {
    this.setState({name : event.target.value})  
  })

  handleClick = ( ()=>{
    this.setState({ cname : 'Google!!!'})
  }

  )
  render(){
  return (
      <div className="App">
        Name : <input type = "text" value={this.state.name} onChange ={this.handleChange}></input>
        <p>Name changed to {this.state.name}</p>

        <button onClick= {this.handleClick}>{this.state.cname}</button>
        <Child uName = "Rksm"/>
      </div>
    );
  }
}

export default App;
