import './Form.css'


export default function Form() {
return (
    <form className='form'>
        <h2>Make a New Reservation!</h2>
        <input type='text' placeholder='name'></input>
        <input type='date' placeholder='date'></input>
        <input type='time' placeholder='time'></input>
        <input type='text' placeholder='party size'></input>
        <button>Submit</button>
    </form>
)
}