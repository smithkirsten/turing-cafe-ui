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
  handleChange = (target) => {
    console.log('this is changing!')
    this.setState({ [target.name]: target.value }, console.log(this.state))
  }

  handleClick = () => {
    //use props function to make post request
  }
  //time and date are types of inputs
  render() {
    return (<form>
      <label htmlFor="name" className="hidden">Name</label>
        <input name='name' value={this.state.name} onChange={(event) => this.handleChange(event.target)} placeholder="name" type='text' />
      <label htmlFor="date" className="hidden">Date</label>
        <input name='date' value={this.state.date} onChange={(event) => this.handleChange(event.target)} placeholder="date(mm/dd)" type='text' />
      <label htmlFor="time" className="hidden">Time</label>
        <input name='time' value={this.state.time} onChange={(event) => this.handleChange(event.target)} placeholder="time" type='text' />
      <label htmlFor='guests' className="hidden">Number of Guests</label>
        <input name='guests' value={this.state.guests} onChange={(event) => this.handleChange(event.target)} placeholder="number of guests" type='number' />
      <button className='submit-button' type='submit' onClick={this.handleClick}>Make Reservation</button> 
    </form>)
  }
}

export default Form