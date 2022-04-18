import UpdateTicketComp from "./updateTicketComp/updateTicketComp"
import './singleTicketComp.css';

const SingleTicketComp = (props) => {
    return (
        <div>
            <div className="single-ticket-display">
                <h2 className="single-ticket-text">Artist: {props.ticket.name}</h2>
                <h3 className="single-ticket-text">Venue: {props.ticket.venue}</h3>
                <h3 className="single-ticket-text">Date: {props.ticket.event_date}</h3>
                <h4 className="single-ticket-text">Ticket: ${props.ticket.price}</h4>
            </div>
            <div className="single-ticket-button-container">
                <button onClick={()=>{props.deleteTicket(props.ticket.id)}}>DELETE TICKET</button>
                <br />
                <UpdateTicketComp
                ticket={props.ticket}
                handleUpdateTicketInputChange={props.handleUpdateTicketInputChange}
                updateTicketFunction={props.updateTicketFunction}
                updateTicket={props.updateTicket}
                ></UpdateTicketComp>
            </div> 
        </div>
    )
}
export default SingleTicketComp