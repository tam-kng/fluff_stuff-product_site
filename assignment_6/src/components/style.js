import React from "react";
import ReactDOM from "react-dom";

export default StyleSheet.create({
    /* Navigation Bar Styles */
    nav: {
        position: relative,
        overflow: auto,
        width: 100,
    },
        /* Navigation Bar Center Styles */
        NavCenter: {
            float: none,
            position: absolute,
            top: 50,
            left: 50,
            transform: translate(-50, -50),
        },
    
        /* Navigation Bar Right-aligned Styles */
        NavRight: {
            textAlign: right,
        }
});