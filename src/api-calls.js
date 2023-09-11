
function fetchReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
   
}

function postReservations(newRes) {
    return fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST', 
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(newRes)
    })
    .then(response => response.json())
}

export {fetchReservations, postReservations}