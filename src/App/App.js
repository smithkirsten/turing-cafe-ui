import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls';
import Form from '../Form/Form';
import Reservation from '../Reservation/Reservation';

class App extends Component {
  constructor () {
    super();
    this.state = {
      reservations: [],
      error: '',
    }
  }
  componentDidMount = async() => {
    const data = await getReservations()
    console.log(data)
    data.error ? 
      this.setState({ error: data.error }) :
      this.setState({ reservations: data }) 
  }
  createCards = () => {
    return this.state.reservations.map(reservation => <Reservation key={reservation.id} reservation={reservation} handleCancel={this.handleCancel}/>)
  }

  determineRender = () => {
    if (this.state.error) {
      return <p>Whoops! Something went wrong. Try again later</p>
    }
    if (this.state.reservations) {
      return this.createCards()
    }
    return <p>loading...</p>
  }

  handleSubmit = (inputs) => {
    const newRes = {...inputs, id: Date.now()}
    this.setState((prevState) => {
      return { reservations: [...prevState.reservations, newRes ]}
    })
  }

  handleCancel = (id) => {
    console.log(`this would delete the card ${id}`)
    //delete card based on id
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
        <div className='resy-container'>
          {this.determineRender()}
        </div>
      </div>
    )
  }
}

export default App;
