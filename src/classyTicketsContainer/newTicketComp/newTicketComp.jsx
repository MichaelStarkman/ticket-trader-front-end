import { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import { VscClose } from "react-icons/vsc";

// import CloseButton from 'react-bootstrap/CloseButton'
// import ModalDialog from 'react-bootstrap/ModalDialog'
// import ModalHeader from 'react-bootstrap/ModalHeader'

const NewTicketComp = (props) => {
    const [show, setShow] = useState(false);
    // const [showing, setShowing] = useState(false)
    // const toggleShowing = () => {
    //     setShowing(!showing)
    // }
    // setShowing(false)

    return(
        <>
         <Button variant="primary" onClick={() => setShow(true)}>
        Post New Ticket!
        </Button>

        <Modal 
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header>
                <button onClick={()=>setShow(false)}>Close</button>     
                <Modal.Title id="example-custom-modal-styling-title">New Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={props.createNewTicket}>
                    Name: <input onChange={props.handleNewTicketInputChange} type="text" name="name"/>
                    <br />
                    Venue: <input onChange={props.handleNewTicketInputChange} type="text" name="venue"/>
                    <br />
                    Date:   <input onChange={props.handleNewTicketInputChange} type="date" name="event_date"/>
                    <br />
                    Price: $<input onChange={props.handleNewTicketInputChange} type="number" name="price"/>
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
//         <div>
//             <h4>Create a New Ticket</h4>
//             <form onSubmit={props.createNewTicket}>
//                 Name: <input onChange={props.handleNewTicketInputChange} type="text" name="name"/>
//                 <br />
//                 Venue: <input onChange={props.handleNewTicketInputChange} type="text" name="venue"/>
//                 <br />
//                 Date:   <input onChange={props.handleNewTicketInputChange} type="date" name="event_date"/>
//                 <br />
//                 Price: $<input onChange={props.handleNewTicketInputChange} type="number" name="price"/>
//                 <br />
//                 Image: <input onChange={props.handleNewTicketInputChange} type="text" name="img" />
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

export default NewTicketComp
// const NewTicketComp = (props) => {
//     return(
//         <div>
//             <h4>Create a New Ticket</h4>
//             <form onSubmit={props.createNewTicket}>
//                 Name: <input onChange={props.handleNewTicketInputChange} type="text" name="name"/>
//                 <br />
//                 Venue: <input onChange={props.handleNewTicketInputChange} type="text" name="venue"/>
//                 <br />
//                 Date:   <input onChange={props.handleNewTicketInputChange} type="date" name="event_date"/>
//                 <br />
//                 Price: $<input onChange={props.handleNewTicketInputChange} type="number" name="price"/>
//                 <br />
//                 {/* Image: <input onChange={props.handleNewTicketInputChange} type="text" name="img" /> */}
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default NewTicketComp