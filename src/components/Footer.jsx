import React from "react";
import '../components/styles/Footer.css';
import logo from '../img/Mark.png';
import YT from '../img/YT.png';
import Twitter from '../img/Twitter.png';
import Insta from '../img/IG.png';
import FB from '../img/FB.png';

const ChildComponent = () => {
    window.location.href = 'https://github.com/bottlin-rnbclub';
}

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-section">

                <img src={logo} alt="logo" />

                <p className="text-logo-2">Beau Montain</p> 
                    <p className="footer-text">
                    A mountain is a part of the earth's crust that is<br></br>
                    higher than the area around it. Mountains usually<br></br>
                    have steep sides that significantly
                </p>

                        <div className="footer-icons">
                            <img alt="ystal progat'" onClick={ChildComponent} src={YT} />
                            <img alt="ystal progat'" onClick={ChildComponent} src={Twitter} />
                            <img alt="ystal progat'" onClick={ChildComponent} src={Insta} />
                            <img alt="ystal progat'" onClick={ChildComponent} src={FB} />
                        </div>
            </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Information</h3>
                    <ul className="footer-list">
                        <li>Facilities</li>
                        <li>News</li>
                        <li>Events</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Useful Links</h3>
                    <ul className="footer-list">
                        <li>Home</li>
                        <li>Package</li>
                        <li>Ticket</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Contact</h3>
                    <ul className="footer-list">
                        <li>Headquarters</li>
                        <li>Manager</li>
                        <li>Sales</li>
                        <li>Why Us</li>
                    </ul>
                </div>
        </footer>
    );
  };
