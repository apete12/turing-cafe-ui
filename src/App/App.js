import './App.css';
import { useState, useEffect } from 'react';
import fetchReservations from '../api-calls';
import AllReservations from '../components/AllReservations/AllReservations';
import Form from '../components/Form/Form';

function App() {
const [reservations, setReservations] = useState([])


useEffect(() => {
  fetchReservations()
  .then(data => setReservations(data))
}, [])

function addReservation(newReservation) {
  setReservations([...reservations, newReservation])
}
console.log(reservations)


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