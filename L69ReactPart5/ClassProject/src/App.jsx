import Lottery from './Lottery';
import './App.css';
import TicketNum from './TicketNum';
import Ticket from './Ticket';



function App() {
  return (
    <>
      <Lottery n={3} winningSum={15}/>
      <TicketNum />
      <Ticket /> 
    </>
  )
}

export default App
