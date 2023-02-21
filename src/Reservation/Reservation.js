import React from 'react';
import './Reservation.css';

const Reservation = ({ reservation }) => {
  return (
    <article className='res-card'>
      <p className='deets name'>{reservation.name}</p>
      <p className='deets'>{reservation.date}</p>
      <p className='deets'>{reservation.time}</p>
      <p className='deets'>Number of guests: {reservation.number}</p>
    </article>
    )
}

export default Reservation