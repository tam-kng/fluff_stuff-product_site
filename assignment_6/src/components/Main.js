import React from "react";
import ReactDOM from "react-dom";

import "./Main.css";

function Main() {
    return (
        <main>
            <div className="banner">
                <h1>Fluff Stuff</h1>
            </div>
            <div className="row">
                <div className="col-6 promo">SALE: 60% off Cushions</div>
                <div className="col-6 promo">The coziest you can get.</div>
            </div>
            <div className="row">
                <div className="col-6 promo">Home and comfort.</div>
                <div className="col-6 promo">SALE: 20% off Sheets</div>
            </div>
        </main>
    )
}

export default Main