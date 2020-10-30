import React from "react";

import "./Footer.css";

// handles footer
function Footer() {
    return (
        <footer>
            <div className="col-12 footer-container">
                <div className="col-2 link-list-1">
                    <p>Company</p>
                    <p>People and Places</p>
                    <p>Job Listings</p>
                    <p>Community Events</p>
                </div>
                <div className="col-2 link-list-2">
                    <p>Legal & Privacy</p>
                    <p>Gift Cards</p>
                    <p>Sustainability</p>
                    <p>Student Discount</p>
                </div>
                <div className="col-2 link-list-3">
                    <p>Investments</p>
                    <p>Donations</p>
                </div>
                <div className="col-2 link-list-4">
                    <p>Community Outreach</p>
                    <p>Work Programs</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer