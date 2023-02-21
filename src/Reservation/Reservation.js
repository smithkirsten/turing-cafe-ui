import React from 'react';
import './Reservation.css';

const Reservation = ({ reservation }) => {
  return (
    <article className='res-card'>
      <p>{reservation.name}</p>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
      <p>Number of guests: {reservation.number}</p>
    </article>
    )
}

export default Reservation