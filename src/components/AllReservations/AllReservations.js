import './AllReservations.css'

export default function AllReservations({reservations}) {

    const reservation = reservations.map((singleReservation) => {
        return (
            <div className="reservation-container" key={singleReservation.id}>
                <h2>Name: {singleReservation.name}</h2>
                <h2>Date: {singleReservation.date}</h2>
                <h2>Time: {singleReservation.time}</h2>
                <h2>Party Size: {singleReservation.number}</h2>
            </div>
        )
    })

    return reservation
}