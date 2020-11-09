import React from "react";
import ReactDOM from "react-dom";
import { FontAwesome } from "react-icons/fa";

import {FaShoppingCart} from "react-icons/fa";
import "./Products.css";
import Pillow from "./Pillow.js";

// component for products
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "Select Below",
            fill: "Select Below",
            value: "coconut",
            wishlist: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addToWishlist = this.addToWishlist.bind(this);
    }

    // handle changes for dropdown menus
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        event.preventDefault();
    }

    // optional wishlist feature
    addToWishlist(name) {
        let temp = this.state.wishlist;

        // if item already added
        if (temp.includes(name)) {
            window.alert("You've already added this item to the wishlist.");
        }
        else {
            temp.push(name);
            this.setState({
                wishlist: temp
            });
        }
    }

    // rendering wishlist html
    renderWishlist() {
        let wishlistHTML = [];
        for (let i=0; i<this.state.wishlist.length; i++) {
            wishlistHTML.push(
                <div>
                    {this.state.wishlist[i]}
                </div>
            );
        }

        return wishlistHTML;
    }

    // render product page
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
                    <Pillow 
                        addToCart={this.props.addToCart}
                        addToWishlist={this.addToWishlist}
                        itemNum={"1"} 
                        url="./images/img_couch_pillow" 
                        itemName="Couch Pillow" 
                        itemColor="After School Special" 
                        itemFill="Duck Down" 
                        itemPrice={25} 
                    />
                    <Pillow 
                        addToCart={this.props.addToCart}
                        addToWishlist={this.addToWishlist} 
                        itemNum={"2"} 
                        url="./images/img_bed_pillow" 
                        itemName="Bed Pillow" 
                        itemColor="After School Special" 
                        itemFill="Duck Down" 
                        itemPrice={35} 
                    />
                    <Pillow 
                        addToCart={this.props.addToCart}
                        addToWishlist={this.addToWishlist} 
                        itemNum={"3"} 
                        url="./images/img_floor_pouf" 
                        itemName="Floor Pouf" 
                        itemColor="After School Special" 
                        itemFill="Duck Down" 
                        itemPrice={30} 
                    />
                    <Pillow 
                        addToCart={this.props.addToCart}
                        addToWishlist={this.addToWishlist}
                        itemNum={"4"} 
                        url="./images/img_round_pillow" 
                        itemName="Round Pillow" 
                        itemColor="After School Special" 
                        itemFill="Duck Down" 
                        itemPrice={20} 
                    />
                </div>
                <div className="row">
                    <div className="wishlist">
                        Wishlist: {this.renderWishlist()}
                    </div>
                </div>
                <div className="product-1-modal">
                    <div id="couch-pillow-modal">
                        <div className="modal-content">
                            <a href="#" className="close-popup">&times;</a>
                            <div className="product-description">
                                <h2>Artisan Couch Pillow</h2>
                                <h2>&#9733;&#9733;&#9733;&#9733;&#9734;</h2>
                                <h2>$25.00</h2>
                                Color: {this.state.color}
                                <br />
                                Fill: {this.state.fill}
                                <form onSubmit={this.handleSubmit}>
                                    <select id="modal-color-dropdown" name="color" value={this.state.color} onChange={this.handleChange} required>
                                        <option value="DEFAULT" disabled>Select a color</option>
                                        <option value="After School Special">After School Special</option>
                                        <option value="Morning Haze">Morning Haze</option>
                                        <option value="Cozy Denim">Cozy Denim</option>
                                        <option value="Rainy Day">Rainy Day</option>
                                    </select>
                                    <select id="modal-fill-dropdown" name="fill" value={this.state.fill} onChange={this.handleChange} required>
                                        <option value="DEFAULT" disabled>Select a fill</option>
                                        <option value="Duck Down">Duck Down</option>
                                        <option value="Hypoallergenic Poly-Blend">Hypoallergenic Poly-Blend</option>
                                        <option value="Memory Foam">Memory Foam</option>
                                    </select>
                                    <button id="modal-add-to-cart" onClick={(e) => this.props.addToCart("Couch Pillow", this.state.color, this.state.fill, 25)}>Add to Cart</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-2-modal">
                    <div id="bed-pillow-modal">
                        <div className="modal-content">
                            <a href="#" className="close-popup">&times;</a>
                            <div className="product-description">
                                <h2>Bed Pillow</h2>
                                <h2>&#9733;&#9733;&#9733;&#9733;&#9734;</h2>
                                <h2>$35.00</h2>
                                Color: {this.state.color}
                                <br />
                                Fill: {this.state.fill}
                                <form onSubmit={this.handleSubmit}>
                                    <select id="modal-color-dropdown" name="color" value={this.state.color} onChange={this.handleChange} required>
                                        <option value="DEFAULT" disabled>Select a color</option>
                                        <option value="After School Special">After School Special</option>
                                        <option value="Morning Haze">Morning Haze</option>
                                        <option value="Cozy Denim">Cozy Denim</option>
                                        <option value="Rainy Day">Rainy Day</option>
                                    </select>
                                    <select id="modal-fill-dropdown" name="fill" value={this.state.fill} onChange={this.handleChange} required>
                                        <option value="DEFAULT" disabled>Select a fill</option>
                                        <option value="Duck Down">Duck Down</option>
                                        <option value="Hypoallergenic Poly-Blend">Hypoallergenic Poly-Blend</option>
                                        <option value="Memory Foam">Memory Foam</option>
                                    </select>
                                    <button id="modal-add-to-cart" onClick={(e) => this.props.addToCart("Bed Pillow", this.state.color, this.state.fill, 35)}>Add to Cart</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-3-modal">
                    <div id="floor-pouf-modal">
                        <div className="modal-content">
                            <a href="#" className="close-popup">&times;</a>
                            <div className="product-description">
                                <h2>Floor Pouf</h2>
                                <h2>&#9733;&#9733;&#9733;&#9733;&#9734;</h2>
                                <h2>$30.00</h2>
                                Color: {this.state.color}
                                <br />
                                Fill: {this.state.fill}
                                <form onSubmit={this.handleSubmit}>
                                    <select id="modal-color-dropdown" name="color" value={this.state.color} onChange={this.handleChange} required>
                                        <option value="DEFAULT" disabled>Select a color</option>
                                        <option value="After School Special">After School Special</option>
                                        <option value="Morning Haze">Morning Haze</option>
                                        <option value="Cozy Denim">Cozy Denim</option>
                                        <option value="Rainy Day">Rainy Day</option>
                                    </select>
                                    <select id="modal-fill-dropdown" name="fill" value={this.state.fill} onChange={this.handleChange} required>
                                        <option value="DEFAULT" disabled>Select a fill</option>
                                        <option value="Duck Down">Duck Down</option>
                                        <option value="Hypoallergenic Poly-Blend">Hypoallergenic Poly-Blend</option>
                                        <option value="Memory Foam">Memory Foam</option>
                                    </select>
                                    <button id="modal-add-to-cart" onClick={(e) => this.props.addToCart("Floor Pouf", this.state.color, this.state.fill, 30)}>Add to Cart</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-4-modal">
                    <div id="round-pillow-modal">
                        <div className="modal-content">
                            <a href="#" className="close-popup">&times;</a>
                            <div className="product-description">
                                <h2>Round Pillow</h2>
                                <h2>&#9733;&#9733;&#9733;&#9733;&#9734;</h2>
                                <h2>$20.00</h2>
                                Color: {this.state.color}
                                <br />
                                Fill: {this.state.fill}
                                <form onSubmit={this.handleSubmit}>
                                    <select id="modal-color-dropdown" name="color" value={this.state.color} onChange={this.handleChange} required>
                                        <option value="DEFAULT" disabled>Select a color</option>
                                        <option value="After School Special">After School Special</option>
                                        <option value="Morning Haze">Morning Haze</option>
                                        <option value="Cozy Denim">Cozy Denim</option>
                                        <option value="Rainy Day">Rainy Day</option>
                                    </select>
                                    <select id="modal-fill-dropdown" name="fill" value={this.state.fill} onChange={this.handleChange} required>
                                        <option value="DEFAULT" disabled>Select a fill</option>
                                        <option value="Duck Down">Duck Down</option>
                                        <option value="Hypoallergenic Poly-Blend">Hypoallergenic Poly-Blend</option>
                                        <option value="Memory Foam">Memory Foam</option>
                                    </select>
                                    <button id="modal-add-to-cart" onClick={(e) => this.props.addToCart("Round Pillow", this.state.color, this.state.fill, 20)}>Add to Cart</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Products;