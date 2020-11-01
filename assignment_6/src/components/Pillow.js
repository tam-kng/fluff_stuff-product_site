import React from "react";

//import "./Pillows.css";

class Pillow extends React.Component {
    constructor(props) {
        super(props);
        this.cartItemNum = this.props.cartItemNum;
        this.url = this.props.url;

        this.name = this.props.itemName;
        this.color = this.props.itemColor;
        this.fill = this.props.itemFill;
        this.price = this.props.itemPrice;
    }

    getImage(name) {
        switch (name) {
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
                console.log("No image was found");
                break;
        }
    }

    render() {
        return (
            <div className="col-2 product-container">
                {this.getImage(this.name)}
                <div className="product-text">
                    <a id={"product-" + this.props.itemNum + "-modal-link"} href="#couch-pillow-modal">{this.name}</a>
                    <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                </div>
                <div className="product-text">
                    <div>{"$" + this.price + ".00"}</div>
                </div>
                <button className="add-to-cart" onClick={(e) => this.props.addToCart(this.cartItemNum, this.name, this.color, this.fill, this.price)}>Add to Cart</button>
            </div>
        )
    }
}

export default Pillow;