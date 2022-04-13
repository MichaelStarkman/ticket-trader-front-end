const NewTicketComp = (props) => {
    return(
        <div>
            <h4>Create a New Ticket</h4>
            <form onSubmit={props.createNewTicket}>
                Name: <input onChange={props.handleNewTicketInputChange} type="text" name="name"/>
                <br />
                Venue: <input onChange={props.handleNewTicketInputChange} type="text" name="venue"/>
                <br />
                Date:   <input onChange={props.handleNewTicketInputChange} type="date" name="event_date"/>
                <br />
                Price: $<input onChange={props.handleNewTicketInputChange} type="number" name="price"/>
                <br />
                Image: <input onChange={props.handleNewTicketInputChange} type="text" name="img" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewTicketComp