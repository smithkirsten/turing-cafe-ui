import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }
  handleChange = () => {
    
  }
  //time and date are types of inputs
  render() {
    return (<form>
      <input name='name' value={this.state.name} onChange={(event) => this.handleChange(event.target)}type='text' />
      <input name='date' value={this.state.date} onChange={(event) => this.handleChange(event.target)} type='text' />
      <input name='time' value={this.state.time} onChange={(event) => this.handleChange(event.target)} type='text' />
      <input name='guests' value={this.state.guests} onChange={(event) => this.handleChange(event.target)} type='number' />
    </form>)
  }
}

export default Form