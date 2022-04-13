import { useState, useEffect } from "react"

const TicketsContainer = () => {
    const [tickets, setTickets] = useState([])
    const getTickets = async () => {
        const getTicketsApiResponse = await fetch("http://localhost:8000/api/tickets/")
        const parsedTickets = await getTicketsApiResponse.json();
        setTickets(parsedTickets);
    }
    return(
        <div>
            <h2>Tickets Container</h2>
            <button onClick={getTickets}>Get Tickets</button>
            <p>The tickets are: {JSON.stringify(tickets)}</p>
        </div>
    )
}
export default TicketsContainer