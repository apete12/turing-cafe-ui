import './App.css';
import { useState, useEffect } from 'react';
import fetchReservations from '../api-calls';

function App() {
const [reservations, setReservations] = useState([])


useEffect(() => {
  fetchReservations()
  .then(data => setReservations(data))
}, [])

console.log(reservations)

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 