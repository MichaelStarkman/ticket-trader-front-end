import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import TicketsContainer from './ticketsContainer/ticketsContainer';
import ClassyTicketsContainer from './classyTicketsContainer/classyTicketsContainer';

function App() {
  return (
    <div className="App">
      <h1 className='webpage-title'>Ticket Trader</h1>
      {/* <TicketsContainer></TicketsContainer> */}
      <ClassyTicketsContainer></ClassyTicketsContainer>
    </div>
  );
}

export default App;
