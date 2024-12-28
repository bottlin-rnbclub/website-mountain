import React from "react";
import './styles/Ticket.css';
import { FiShoppingCart } from "react-icons/fi";

const ChildComponent = () => {
    window.location.href = 'https://github.com/bottlin-rnbclub';
}

export default function Ticket(){
    return(
        <div className="container">
            <div className="row">
                <div className="title_main">
                    <p className="Entrance">Entrance Ticket</p>
                    <h1 className="Beuau">
                        Beuau M.<br></br>
                        Ticket
                    </h1>
                    <p className="ask_text">
                        Always ask for the number of tickets you<br></br>
                        paid for. the ticket is valid proof of your<br></br>
                        entry into the mountain beuau area
                    </p>
                </div>
                <div className="btn-main-screen" onClick={ChildComponent}>
                    <FiShoppingCart className="CartShopping" /> <p>Buy Ticket</p>
                </div>
            </div>
        </div>
    );
};