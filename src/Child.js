import React, { Component } from 'react';
import './App.css';


class Child extends Component {
  constructor(props){
    super(props)
    this.state = {
      uname: 'sushmitha'
    };
  }
  changeName = () =>{
      this.setState({name:'Meenakshi'})
  }
  render(){
  return (
      <div className="App">
        <p>my name is {this.props.uName}</p>
        {/* <input 
        type= "text"
        onChange = {this.handleChange}/>
        <p> Hi {this.state.name}</p> */}
    
      </div>
    );
  }
}

export default Child;
