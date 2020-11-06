import React from "react";
import ReactDOM from "react-dom";

import "./Cart.css";

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.imgExt = "./images/"
        this.shipping = 4.99;
        this.tax = 1.29;

        console.log("cart items passed to cart.js: ", this.props.cartItems);
        this.productContainers = "";
        this.subtotal = this.props.subtotal;
        //this.buildProductContainers();

        /* TESTING */
        /*
        console.log("building product containers...");
        for (let i=0; i < this.props.cartItems.length; i++){
            console.log("Item: ", this.props.cartItems[i]);


            this.productContainers.concat(
                '<div className="col-5 product-container">Filler</div>'
            );
        }
        */
    }

    /*
    buildProductContainers() {
        console.log("building product containers...");
        for (let i=0; i < this.props.cartItems.length; i++){

            console.log("Item: ", this.props.cartItems[i]);


            this.productContainers.concat(
                <div className="col-5 product-container">
                    Filler
                </div>
            );
        }
    }
    */

    getImage(productName) {
        switch (productName) {
            case "Couch Pillow":
                return <img src={require("./images/img_couch_pillow.jpg")} alt="couch pillow"/>
                break;
            case "Bed Pillow":
                return <img src={require("./images/img_bed_pillow.jpg")} alt="bed pillow"/>
                break;
            case "Floor Pouf":
                return <img src={require("./images/img_floor_pouf.jpg")} alt="floor pouf"/>
                break;
            case "Round Pillow":
                return <img src={require("./images/img_round_pillow.jpg")} alt="round pillow"/>
                break;
            default:
                break;
        }
    }

    calculateShipping() {
        if (this.props.subtotal == 0) {
            return "0.00"
        }
        else {
            return this.shipping;
        }
    }

    calculateTax() {
        if (this.props.subtotal == 0) {
            return "0.00"
        }
        else {
            return this.tax;
        }
    }

    calculateTotal() {
        if (this.props.subtotal == 0) {
            return "0.00"
        }
        else {
            return this.props.subtotal + this.shipping + this.tax;
        }
    }

    renderProducts() {
        let productList = [];
        for (let i=0; i < this.props.cartItems.length; i++){
            let productName = this.props.cartItems[i].name;
            let productColor = this.props.cartItems[i].color;
            let productFill = this.props.cartItems[i].fill;
            let productCost = this.props.cartItems[i].cost;

            productList.push(
                <React.Fragment key={i}>
                    <div className="cart-product-container">
                        {this.getImage(productName)}
                        <div className="cart-product-description">
                            <h3>{productName}</h3>
                            <div>Color: {this.props.cartItems[i].color}</div>
                            <div>Fill: {this.props.cartItems[i].fill}</div>
                            <div>Cost: ${this.props.cartItems[i].cost}</div>
                            <button className="remove-button" onClick={(e) => this.props.removeFromCart(productName, productColor, productFill, productCost)}>Remove</button>
                        </div>
                    </div>
                </React.Fragment>
            );
        }

        return productList;
    }

    render() {
        //console.log("The cart contains: ", this.productContainers.length);
        return (
            <main>
                <h2>Cart</h2>
                <div className="col-5 products-list">
                    {this.renderProducts()}
                </div>
                <div className="col-3 cart-summary">
                    <div className="cart-summary-row">
                        <div className="subtotal-label">Subtotal:</div>
                        <div className="cost">${this.props.subtotal}.00</div>
                    </div>
                    <div className="cart-summary-row">
                        <div className="shipping-label">Shipping:</div>
                        <div className="cost">${this.calculateShipping()}</div>
                    </div>
                    <div className="cart-summary-row">
                        <div className="tax-label">Tax:</div>
                        <div className="cost">${this.calculateTax()}</div>
                    </div>
                    <hr className="divider" size="1" width="90%" color="black"></hr>
                    <div className="cart-summary-row">
                        <div className="total-label">Total:</div>
                        <div className="cost">${this.calculateTotal()}</div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Cart;
