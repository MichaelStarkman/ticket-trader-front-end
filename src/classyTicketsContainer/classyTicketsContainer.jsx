import React from "react";
import SingleTicketComp from "./singleTicketComp/singleTicketComp";
import NewTicketComp from "./newTicketComp/newTicketComp";
// import apiUrl from "../apiConfig";

class ClassyTicketsContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            tickets: [],
            newTicket: {
                name: "",
                venue: "",
                event_date: "",
                price: null,
                // img: ""
            },
            updateTicket: {
                name: "",
                venue: "",
                event_date: "",
                price: null,
                // img: ""
            }
        }
    }
    handleNewTicketInputChange = (e)=>{
        this.setState({
            newTicket: {
                ...this.state.newTicket,
                [e.target.name] : e.target.value
            }
        })
    }
    createNewTicket = async (e) => {
        console.log(this.state.newTicket)
        e.preventDefault();
        
        const apiResponse = await fetch("https://ancient-woodland-14399.herokuapp.com/api/tickets/", {
            method: "POST",
            body: JSON.stringify(this.state.newTicket),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if(apiResponse.status == 201){
            const creationResponseParsed = await apiResponse.json()
            this.setState({
                tickets: [...this.state.tickets, creationResponseParsed]
            })  
        }
    }
    async getTickets(){
        const getTicketsApiResponse = await fetch(`https://ancient-woodland-14399.herokuapp.com/api/tickets/`)
        const parsedTickets = await getTicketsApiResponse.json();
        this.setState({
            tickets: parsedTickets
        })
    }
    deleteTicket = async (idToDelete) => {
        const deleteResponse = await fetch(`https://ancient-woodland-14399.herokuapp.com/api/tickets/${idToDelete}`, {
            method: "DELETE",
        })
        console.log(deleteResponse.status)
        if(deleteResponse.status == 204){
            this.setState({
                tickets: this.state.tickets.filter(t => t.id !== idToDelete)
            })
        }
    }
    handleUpdateTicketInputChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            updateTicket: {
                ...this.state.updateTicket,
                [e.target.name] : e.target.value
            }
        })
    }
    updateTicket = async (idToUpdate) => {
        const apiResponse = await fetch(`https://ancient-woodland-14399.herokuapp.com/api/tickets/${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(this.state.updateTicket),
            headers: {
                'Content-Type': "application/json"
            }
        })
        if(apiResponse.status == 200){
            const parsedResponse = await apiResponse.json();
            this.setState({
                tickets: this.state.tickets.map(t => t.id === idToUpdate ? parsedResponse : t)
            })
        }
        console.log(apiResponse.status)
    }
    componentDidMount(){
        this.getTickets()
    }
    render () {
        return(
            <div>
                <h2>Tickets Container</h2>
                <NewTicketComp
                createNewTicket={this.createNewTicket}
                handleNewTicketInputChange={this.handleNewTicketInputChange}
                ></NewTicketComp>
                {this.state.tickets.map((ticket)=>{
                    return <SingleTicketComp
                    updateTicket={this.updateTicket}
                    deleteTicket={this.deleteTicket}
                    ticket={ticket} 
                    handleUpdateTicketInputChange={this.handleUpdateTicketInputChange}
                    key={`ticket-${ticket.id}`}
                    ></SingleTicketComp>
                })}
            </div>
        )
    }
}
export default ClassyTicketsContainer

