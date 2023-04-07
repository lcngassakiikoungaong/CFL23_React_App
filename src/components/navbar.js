import React from "react";
import "../css/shared_css/navbar.css";
import { Link } from 'react-router-dom';

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function Navbar() {

    return (
        <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            />
        </head>
        <nav>
            <Link href="/summary"><img src=""/></Link>
            <div className="nav-links" id="navLinks">
                <ul>
                    <li><Link to="/summary" id="homeNav">SUMMARY</Link></li>
                    <li><Link to="/live" id="liveNav">LIVE</Link></li>
                    <li><Link to="/give" id="giveNav">GIVE</Link></li>
                    <li><Link to="/grow" id="growNav">GROW</Link></li>
                    <li><Link to="/owe" id="oweNav">OWE</Link></li>
                    <li><Link to="/about" id="homeNav">ABOUT</Link></li>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar