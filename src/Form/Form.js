import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  //time and date are types of inputs
  render() {
    return (<form>
      <input name='name' type='text' />
      <input name='date' type='text' />
      <input name='time' type='text' />
      <input name='guests' type='number' />
    </form>)
  }
}

export default Form