import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import {IconContext} from "react-icons";

import './Header.css';

// Header component containing navigation bar
class Header extends React.Component {
    constructor(props){
        super(props);
    }

    // render HTML
    render() {
        return (
            <header>
                <div className="nav">
                    <button href="home.html">Logo</button>
    
                    <div className="nav-center">
                        <button href="pillows.html">Sheets</button>
                        <button href="pillows.html">Cushions</button>
                        <button onClick={(e) => this.props.changePage("products")}>Pillows</button>
                        <button href="pillows.html">Sale</button>
                    </div>
    
                    <div className="nav-right">
                        <button href="about-us.html">About</button>
                        <button href="contact-us.html">Contact</button>
                        <button href="account.html">Account</button>
                        <button onClick={(e) => this.props.changePage("cart")}>
                            <IconContext.Provider value={{style: {color: '#6E879A', fontSize: '25px'}}}>
                                <FaShoppingCart />
                            </IconContext.Provider>
                        </button>
                        <button disabled>
                            {this.props.cartItemNum}
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header
