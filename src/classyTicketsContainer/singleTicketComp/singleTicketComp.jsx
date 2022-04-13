import UpdateTicketComp from "./updateTicketComp/updateTicketComp"

const SingleTicketComp = (props) => {
    return (
        <div>
            <h3>Artist: {props.ticket.name}</h3>
            <h4>Venue: {props.ticket.venue}</h4>
            <h4>Date: {props.ticket.event_date}</h4>
            <h4>${props.ticket.price}</h4>
            <h4>{props.ticket.img}</h4>
            <button onClick={()=>{props.deleteTicket(props.ticket.id)}}>DELETE TICKET</button>
            <UpdateTicketComp
            ticket={props.ticket}
            handleUpdateTicketInputChange={props.handleUpdateTicketInputChange}
            updateTicket={props.updateTicket}
            ></UpdateTicketComp>
        </div>
    )
}
export default SingleTicketComp