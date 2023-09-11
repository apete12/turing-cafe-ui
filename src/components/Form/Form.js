import './Form.css'
import { useState } from 'react';


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
    addReservation(newReservation)
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