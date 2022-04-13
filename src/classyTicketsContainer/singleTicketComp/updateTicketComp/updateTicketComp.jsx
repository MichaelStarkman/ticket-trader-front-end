const UpdateTicketComp = (props) => {
    return (
        <div>
            <h4>Update {props.ticket.name} Ticket</h4>
            <form onSubmit={(e)=>{e.preventDefault(); props.updateTicket(props.ticket.id)}}>
                Name: <input onChange={props.handleUpdateTicketInputChange} type="text" name="name" />
                <br />
                Venue: <input onChange={props.handleUpdateTicketInputChange} type="text" name="venue"/>
                <br />
                Date:   <input onChange={props.handleUpdateTicketInputChange} type="date" name="event_date" />
                <br />
                Price: $<input onChange={props.handleUpdateTicketInputChange} type="number" name="price"/>
                <br />
                Image: <input onChange={props.handleUpdateTicketInputChange} type="text" name="img" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UpdateTicketComp