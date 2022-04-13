import { useState } from "react"
// import { useEffect } from "react"
import SingleTicketComp from "../classyTicketsContainer/singleTicketComp/singleTicketComp"

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
            {tickets.map((ticket)=>{
                return <SingleTicketComp
                ticket={ticket} 
                key={`ticket-${ticket.id}`}
                ></SingleTicketComp>
            })}
        </div>
    )
}
export default TicketsContainer