import React from "react";
import ReactDOM from "react-dom";
import { FontAwesome } from "react-icons/fa";

import {FaShoppingCart} from "react-icons/fa";
import "./Pillows.css";

class Pillows extends React.Component {
    render() {
        return (
            <main>
                <ul className="breadcrumbs">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li>Pillows</li>
                </ul>
                <div className="categories">
                    <div id="color-dropdown">Color</div>
                    <div id="fill-dropdown">Fill</div>
                    <div id="sort-by-dropdown">Sort By</div>
                </div>
                <div className="row">
                    <div className="col-2 product-container">
                        <img src={require("./images/img_couch_pillow.jpg")} alt="couch pillow"/>
                        <div className="product-text">
                            <a id="product-1-modal-link" href="#couch-pillow-modal">Couch Pillow</a>
                            <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                        </div>
                        <div className="product-text">
                            <div>$24.99</div>
                        </div>
                        <button className="add-to-cart" onClick={(e) => this.props.addToCart(this.props.cartItemNum, "Couch Pillow", "After School Special", "Duck Down", 25)}>Add to Cart</button>
                    </div>
                    <div className="col-2 product-container">
                        <img src={require("./images/img_bed_pillow.jpg")} alt="bed pillow"/>
                        <div className="product-text">
                            <div>Woven Bed Pillow</div>
                            <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                        </div>
                        <div className="product-text">
                            <div>$39.99</div>
                        </div>
                        <button className="add-to-cart" onClick={(e) => this.props.addToCart(this.props.cartItemNum, "Bed Pillow", "After School Special", "Duck Down", 40)}>Add to Cart</button>
                    </div>
                    <div className="col-2 product-container">
                        <img src={require("./images/img_floor_pouf.jpg")} alt="floor pouf"/>
                        <div className="product-text">
                            <div>Floor Pouf</div>
                            <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                        </div>
                        <div className="product-text">
                            <div>$19.99</div>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <div className="col-2 product-container">
                        <img src={require("./images/img_round_pillow.jpg")} alt="round pillow"/>
                        <div className="product-text">
                            <div>Velvet Round Pillow</div>
                            <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                        </div>
                        <div className="product-text">
                            <div>$29.99</div>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <div className="product-1-modal">
                    <div id="couch-pillow-modal">
                        <div className="modal-content">
                            <a href="#" className="close-popup">&times;</a>
                            <div className="product-description">
                                <h2>Artisan Couch Pillow</h2>
                                <h2>&#9733;&#9733;&#9733;&#9733;&#9734;</h2>
                                <h2>$24.99</h2>
                                This is product information text about this product's information.
                                <select id="modal-color-dropdown" required defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT" disabled>Select a color</option>
                                    <option value="After School Special">After School Special</option>
                                    <option value="Morning Haze">Morning Haze</option>
                                    <option value="Cozy Denim">Cozy Denim</option>
                                    <option value="Rainy Day">Rainy Day</option>
                                </select>
                                <select id="modal-fill-dropdown" required defaultValue={'DEFAULT'}>
                                    <option value="DEFAULT" disabled>Select a fill</option>
                                    <option value="Duck Down">Duck Down</option>
                                    <option value="Hypoallergenic Poly-Blend">Hypoallergenic Poly-Blend</option>
                                    <option value="Memory Foam">Memory Foam</option>
                                </select>
                                <button id="modal-add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Pillows;