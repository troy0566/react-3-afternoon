import React, { Component } from 'react';
import logo from './logo.svg';
import {students} from "./students.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: students,
      id: 0
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }
  
  handleNext(){
    let id = this.state.id;
    if(id+1 <= this.state.students.length - 1)
      {id = id + 1;
      this.setState({id: id}
    )}
  }

  handlePrev(){
    let id = this.state.id;
    if(id-1 >= 0)
      {id = id - 1;
      this.setState({id: id}
    )}
  }

  render() {
     return (
      <div className="App">
        <nav>
        <strong><h2 class="left">Home</h2></strong>
        <strong><h2 class="right">DevMountain Directory</h2></strong>
    </nav>
    <main>
        <h1 id="name">{this.state.students[this.state.id].name}</h1>
        <p>From: {this.state.students[this.state.id].from}</p>
        <p>Fun Fact: {this.state.students[this.state.id].funFact}</p>
        <div></div>
        <p>Would you rather...</p>
     <ul>
        <li>...live in the city or country?</li>
        {this.state.students[this.state.id].cityOrCountry}
        <li>...be indoors or outdoors?</li>
        {this.state.students[this.state.id].indoorsOrOutdoors}
        <li>...travel every day or nevre leave home?</li>
        {this.state.students[this.state.id].travel}
        <li>...eat at Top's or Subway?</li>
        {this.state.students[this.state.id].food}
        <li>...have a dog or a cat?</li>
        {this.state.students[this.state.id].dogOrCat}
    </ul>
        <button onClick={this.handlePrev}>Prev</button>
        <button onClick={this.handleNext}>Next</button>
    </main>


      </div>
    );
  }
}

export default App;
