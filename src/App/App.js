import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super(),
    this.state = {
      reservations: [],
      error: '',
    }
  }
  componentDidMount = () => {
    //get request
  }
  createCards = () => {
    //check if cards. if cards, make cards. else make loading page
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
