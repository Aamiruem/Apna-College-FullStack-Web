import TicketNum from "./TicketNum";
import "./Ticket.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function Ticket({ ticket }) {

    return (
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}

Ticket.propTypes = {
    ticket: PropTypes.array.isRequired,
};
