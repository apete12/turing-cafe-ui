import './Form.css'
import { useState } from 'react';
import { postReservations } from '../../api-calls';


export default function Form({addReservation}) {
const [name, setName] = useState('')
const [date, setDate] = useState('')
const [time, setTime] = useState('')
const [partySize, setPartySize] = useState('')

function submitReservation(e){
    e.preventDefault()
    const newReservation = {
        id: Date.now(),
        name: name,
        date: date,
        time: time,
        number: partySize
    }
    postReservations(newReservation)
    .then(data => {
        addReservation(data)

    }).catch(error => console.log(error.message))
    clearForm()
}

function clearForm() {
    setName('')
    setDate('')
    setTime('')
    setPartySize('')
}

return (
    <form className='form'>
        <h2>Make a New Reservation!</h2>
        <input type='name' placeholder='name' value={name} onChange={e => setName(e.target.value)}></input>
        <input type='date' placeholder='date' value={date} onChange={e => setDate(e.target.value)}></input>
        <input type='time' placeholder='time' value={time} onChange={e => setTime(e.target.value)}></input>
        <input type='number' placeholder='party size' value={partySize} onChange={e => setPartySize(e.target.value)}></input>
        <button onClick={e => submitReservation(e)}>Submit</button>
    </form>
    )
}