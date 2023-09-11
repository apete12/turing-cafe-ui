import './App.css';
import { useState, useEffect } from 'react';
import fetchReservations from '../api-calls';
import AllReservations from '../components/AllReservations/AllReservations';
import Form from '../components/Form/Form';

function App() {
const [reservations, setReservations] = useState([])
const [error, setError] = useState('')

useEffect(() => {
  fetchReservations()
  .then(data => setReservations(data))
  .catch(error => {
    setError(error)
    console.log(error.message)}
    )
}, [])

function addReservation(newReservation) {
  setReservations([...reservations, newReservation])
}

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
          <Form addReservation={addReservation}/>
      </div>
      <div className='resy-container'>
        <AllReservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 