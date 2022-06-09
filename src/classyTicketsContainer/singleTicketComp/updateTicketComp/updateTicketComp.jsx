import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './updateTicketComp.css'

const UpdateTicketComp = (props) => {
    const [show, setShow] = useState(false);
    // const [updateTicketInfo, setUpdateTicketInfo] = useState({
    //     name: props.ticket.name,
    //     venue: props.ticket.venue,
    //     event_date: props.ticket.event_date,
    //     price: props.ticket.price,
    //     _id: props.ticket._id 

    // })
    
    return (
        <>
         <Button 
         variant="primary" onClick={() => setShow(true)}>
        Edit Ticket
        </Button>
        <Modal 
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header>
                <button onClick={()=>setShow(false)}>Close</button>     
                <Modal.Title id="example-custom-modal-styling-title">Update Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={()=>props.updateTicketFunction(props.ticket.id)}>
                    Name: <input onChange={props.handleUpdateTicketInputChange} type="text" name="name" placeholder={props.ticket.name}/>
                    <br />
                    Venue: <input onChange={props.handleUpdateTicketInputChange} type="text" name="venue" placeholder={props.ticket.venue}/>
                    <br />
                    Date:   <input onChange={props.handleUpdateTicketInputChange} type="date" name="event_date" placeholder={props.ticket.event_date}/>
                    <br />
                    Price: $<input onChange={props.handleUpdateTicketInputChange} type="number" name="price" placeholder={props.ticket.price}/>
                    <br />
                    {/* Image: <input onChange={props.handleNewTicketInputChange} type="text" name="img" /> */}
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
            
            </Modal.Footer>
        </Modal>
        </>
    )}
        // <div>
        //     <h4>Update {props.ticket.name} Ticket</h4>
        //     <form onSubmit={(e)=>{e.preventDefault(); props.updateTicket(props.ticket.id)}}>
        //         Name: <input onChange={props.handleUpdateTicketInputChange} type="text" name="name" />
        //         <br />
        //         Venue: <input onChange={props.handleUpdateTicketInputChange} type="text" name="venue"/>
        //         <br />
        //         Date:   <input onChange={props.handleUpdateTicketInputChange} type="date" name="event_date" />
        //         <br />
        //         Price: $<input onChange={props.handleUpdateTicketInputChange} type="number" name="price"/>
        //         <br />
        //         {/* Image: <input onChange={props.handleUpdateTicketInputChange} type="text" name="img" /> */}
        //         <br />
        //         <button type="submit">Submit</button>
        //     </form>
        // </div>
//     )
// }
export default UpdateTicketComp