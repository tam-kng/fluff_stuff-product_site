import React from "react";

import "./Products.css";
import Pillow from "./Pillow.js";

// handles product page
class Products extends React.Component {
    constructor(props) {
        super(props);
        // handle modal variables
        this.state = {
            color: "Select Below",
            fill: "Select Below",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle changes to dropwdowns
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // handle submission of product details
    handleSubmit(event) {
        event.preventDefault();
    }

    // render HTML
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
                        itemNum={"1"} 
                        cartItemNum={this.props.cartItemNum} 
                        url="./images/img_couch_pillow" 
                        itemName="Couch Pillow" 
                        itemColor="After School Special" 
                        itemFill="Duck Down" 
                        itemPrice={25} 
                    />
                    <Pillow 
                        addToCart={this.props.addToCart} 
                        itemNum={"2"} 
                        cartItemNum={this.props.cartItemNum} 
                        url="./images/img_bed_pillow" 
                        itemName="Bed Pillow" 
                        itemColor="After School Special" 
                        itemFill="Duck Down" 
                        itemPrice={35} 
                    />
                    <Pillow 
                        addToCart={this.props.addToCart} 
                        itemNum={"3"} 
                        cartItemNum={this.props.cartItemNum} 
                        url="./images/img_floor_pouf" 
                        itemName="Floor Pouf" 
                        itemColor="After School Special" 
                        itemFill="Duck Down" 
                        itemPrice={30} 
                    />
                    <Pillow 
                        addToCart={this.props.addToCart} 
                        itemNum={"4"} 
                        cartItemNum={this.props.cartItemNum} 
                        url="./images/img_round_pillow" 
                        itemName="Round Pillow" 
                        itemColor="After School Special" 
                        itemFill="Duck Down" 
                        itemPrice={20} 
                    />
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
                                    <button id="modal-add-to-cart" onClick={(e) => this.props.addToCart(this.cartItemNum, "Couch Pillow", this.state.color, this.state.fill, 25)}>Add to Cart</button>
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