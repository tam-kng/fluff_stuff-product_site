import React from 'react';
import logo from '../logo.svg';

import './App.css';
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "home",
      productNum: 1,
      cartNum: 0,
      cartItems: [],
      cartSubtotal: 0
    };

    this.changePage = this.changePage.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  addToCart(name, color, fill, cost) {
    let productNum = this.state.productNum;

    this.setState((state) => {
      return {
        // update cartItems array with a new item, assigned the current productNum
        cartItems: state.cartItems.concat([{productNum, name, color, fill, cost}]),
        // increment number of items currently in the cart
        cartNum: state.cartNum + 1,
        // increment ID assigned to items that are added to the cart
        productNum: state.productNum + 1,
        cartSubtotal: state.cartSubtotal + cost
      }
    });
  }

  removeFromCart(productNum, name, color, fill, cost) {
    let itemToRemoveIndex = -1;

    let items = this.state.cartItems;
    console.log("Current Items in Cart before Removal: ", items);
    console.log("Current Number of Items in Cart before Removal: ", items.length)

    for (let i=0; i < this.state.cartItems.length; i++) {
      if (this.state.cartItems[i].productNum == productNum) {
          itemToRemoveIndex = i;
      }
    }

    console.log("The index of the item to be removed: ", itemToRemoveIndex);

    // NOTE: everything seems right until this point
    items.splice(itemToRemoveIndex, 1);

    console.log("New cart item", items)

    this.setState((state) => {
      return {
        cartItems: items,
        // decrement number of items in cart to reflect removal
        cartNum: state.cartNum - 1,
        cartSubtotal: state.cartSubtotal - cost
      }
    }, () => {console.log("The updated cartItems should be: ", this.state.cartItems);});
  }

  render() {
    if (this.state.page == "home") {
      return (
        <div className="App">
          <Header changePage={this.changePage} cartItemNum={this.state.cartNum.toString()}/>
          <Home changePage={this.changePage}/>
          <Footer />
        </div>
      );
    }
    else if (this.state.page == "products") {
      return (
        <div className="App">
          <Header changePage={this.changePage} cartItemNum={this.state.cartNum.toString()}/>
          <Products changePage={this.changePage} addToCart={this.addToCart} productNum={this.state.productNum}/>
          <Footer />
        </div>
      );
    }
    else if (this.state.page == "cart") {
      return (
        <div className="App">
          <Header changePage={this.changePage} cartItemNum={this.state.cartNum.toString()}/>
          <Cart cartItems={this.state.cartItems} subtotal={this.state.cartSubtotal} removeFromCart={this.removeFromCart}/>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
