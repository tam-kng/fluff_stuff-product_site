import React from "react";
import ReactDOM from "react-dom";

import './Header.css';
import styles from './style';

function Header() {
    return (
        <header className="nav" style={styles.nav}>
            <a href="home.html">Logo</a>

            <div className="nav-center">
                <a href="pillows.html">Sheets</a>
                <a href="pillows.html">Cushions</a>
                <a href="pillows.html">Pillows</a>
                <a href="pillows.html">Sale</a>
            </div>

            <div className="nav-right" style={{alignItems: 'flex-end'}}>
                <a href="about-us.html" style={{color: 'red'}}>About</a>
                <a href="contact-us.html">Contact</a>
                <a href="account.html">Account</a>
                <a href="cart.html">Cart</a>
            </div>
        </header>
    )
}

export default Header
