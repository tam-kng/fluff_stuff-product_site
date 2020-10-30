import React from "react";

import "./Cart.css";

// Cart component handling the cart page
class Cart extends React.Component {
    constructor(props){
        super(props);
        // constant variables
        this.imgExt = "./images/"
        this.shipping = 4.99;
        this.tax = 1.29;

        this.productContainers = "";
        this.subtotal = 0;
    }

    // fetch image corresponding to product name
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

    // calculate costs (if cart empty, and costs zero, sets costs to be zero)
    calculateShipping() {
        if (this.subtotal == 0) {
            return "0.00"
        }
        else {
            return this.shipping;
        }
    }

    calculateTax() {
        if (this.subtotal == 0) {
            return "0.00"
        }
        else {
            return this.tax;
        }
    }

    calculateTotal() {
        if (this.subtotal == 0) {
            return "0.00"
        }
        else {
            return this.subtotal + this.shipping + this.tax;
        }
    }

    // render products in cart
    renderProducts() {
        let productList = [];
        for (let i=0; i < this.props.cartItems.length; i++){
            let productName = this.props.cartItems[i].name;
            this.subtotal += this.props.cartItems[i].cost;

            productList.push(
                <React.Fragment key={i}>
                    <div className="cart-product-container">
                        {this.getImage(productName)}
                        <div className="cart-product-description">
                            <h3>{productName}</h3>
                            <div>Color: {this.props.cartItems[i].color}</div>
                            <div>Fill: {this.props.cartItems[i].fill}</div>
                            <div>Cost: ${this.props.cartItems[i].cost}</div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }

        return productList;
    }

    // render cart
    render() {
        return (
            <main>
                <h2>Cart</h2>
                <div className="col-5 products-list">
                    {this.renderProducts()}
                </div>
                <div className="col-3 cart-summary">
                    <div className="cart-summary-row">
                        <div className="subtotal-label">Subtotal:</div>
                        <div className="cost">${this.subtotal}.00</div>
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
