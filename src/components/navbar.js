import React from "react";
import "../css/shared_css/navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
        <nav>
            {/* <Link href="/summary"><img src="" alt='' /></Link> */}
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