// import { useState } from "react";
// import "./Lottery.css";
// import { genTicket, sum } from "./helper";

// // function genTicket() {
// //     let ticket = [];
// //     for (let i = 0; i < 3; i++) {
// //         ticket.push(Math.floor(Math.random() * 10));
// //     }
// //     return ticket;
// // }

// export default function Lottery() {
//     let [tickets, setTickets] = useState([(genTicket(3))]);
//     let isWinning = sum(tickets) === 15;
    
//     return (
//         <div>
//             <h1>Lottery Game</h1>
//             <div className="ticket">
//                 <span>{tickets[0]}</span>
//                 <span>{tickets[1]}</span><span>{tickets[2]}</span>
//                 <br />
//                 <br />
//                 <br />
//                 <span>Total: {sum(tickets)}</span>

//                 <br />
//                 <br />
//                 <br />
//                 <br />

//                 <button onClick={() => setTickets([...tickets, 1])}>Buy Ticket</button>

//                 <button onClick={() => setTickets(tickets.slice(1))}>Sell Ticket</button>

//                 <button onClick={() => setTickets(genTicket())}>Generate Ticket</button>
//             </div>
//             <h3>{isWinning && "Congratulation You won!"}</h3>
//             <h3>Current Balance: {tickets.length}</h3>

//         </div>
//     );
// }












// import { useState } from "react";
// import "./Lottery.css";
// import { genTicket, sum } from "./helper";

// export default function Lottery() {
//     const [tickets, setTickets] = useState([genTicket()]);

//     // Check if any ticket is a winning ticket
//     const isWinning = tickets.some(ticket => sum(ticket) === 15);

//     return (
//         <div>
//             <h1>Lottery Game</h1>
//             <div className="tickets">
//                 {tickets.map((ticket, index) => (
//                     <div key={index} className="ticket">
//                         {ticket.map((num, i) => (
//                             <span key={i}>{num}</span>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <button onClick={() => setTickets([...tickets, genTicket()])}>
//                 Buy Ticket
//             </button>
//             <button onClick={() => setTickets(tickets.slice(1))} disabled={tickets.length === 0}>
//                 Sell Ticket
//             </button>
//             <h3>{isWinning && "Congratulations! You won!"}</h3>
//             <h3>Current Balance: {tickets.length}</h3>
//         </div>
//     );
// }













































import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";



export default function Lottery() {
    let [tickets, setTickets] = useState(genTicket(3));
    let isWinning = sum(tickets) === 15;
    let buyTicket = () => {
        setTickets(genTicket(3));
    }
    
    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="tickets">
                <span>{tickets[0]}</span>
                <span>{tickets[1]}</span><span>{tickets[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning && "Congratulations: You won!"}</h3>
        </div>
    );
}
