import './App.css';
// import TicketsContainer from './ticketsContainer/ticketsContainer';
import ClassyTicketsContainer from './classyTicketsContainer/classyTicketsContainer';

function App() {
  return (
    <div className="App">
      <h1>Tickets go here!</h1>
      {/* <TicketsContainer></TicketsContainer> */}
      <ClassyTicketsContainer></ClassyTicketsContainer>
    </div>
  );
}

export default App;
