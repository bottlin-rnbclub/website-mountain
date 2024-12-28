import React from "react";
import logo from '../img/Mark.png';
import UtubeLogo from '../img/Icon.png';
import '../components/styles/Header.css';

export default function Header() {
    return(
        <div className="container">
            <nav className="logo">
                <img src={logo} alt="logo" />
                <p className="text-logo">Beau Montain</p>
            </nav>

            <nav className="menu">
                <li className="menu-top">Home</li>
                <li className="menu-top">Package</li>
                <li className="menu-top">Ticket</li>
                <li className="menu-top">About us</li>
                <li className="menu-top">Contact</li>
                <li className="menu-top">Blog</li>
            </nav>

            <nav className="youtube">
                <div className="icon-utube">
                    <img href="https://lk.gosuslugi.ru/health/meddocs/items/227.86.24.09.133624504" target="blank_" src={UtubeLogo} alt='youtube'></img>
                    <p className="youtube-text">YouTube</p>
                </div>
            </nav>
        </div>
    )
}