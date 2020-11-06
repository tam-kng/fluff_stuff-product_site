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
      cart: 0,
      cartItems: [],
      cartSubtotal: 0
    };

    this.changePage = this.changePage.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

    this.pages = {
        "home": <Home changePage={this.changePage}/>,
        "products": <Products changePage={this.changePage} addToCart={this.addToCart} cartItemNum={this.state.cart}/>,
        "cart": <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
    };
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  addToCart(cartItemNum, name, color, fill, cost) {
    this.setState((state) => {
      return {
        cart: state.cart + 1,
        cartItems: state.cartItems.concat([{name, color, fill, cost}]),
        cartSubtotal: state.cartSubtotal + cost
      }
    });

    /* TESTING */
    console.log("Cart Items Length: ", this.state.cartItems.length);

    for(var i=0; i < this.state.cartItems.length; i++){
      for (var j=0; j < this.state.cartItems[i].length; j++){
        console.log(this.state.cartItems[i][j]);
      }
    }
  }

  removeFromCart(name, color, fill, cost) {
    this.setState((state) => {
      return {
        cart: state.cart - 1,
        cartItems: state.cartItems.splice(state.cartItems.indexOf([{name, color, fill, cost}]), 1),
        cartSubtotal: state.cartSubtotal - cost
      }
    });
  }

  render() {
    console.log("current number of items in cart ", this.state.cart);
    console.log("curret number of items in cart according to array ", this.state.cartItems);

    if (this.state.page == "home") {
      return (
        <div className="App">
          <Header changePage={this.changePage} cartItemNum={this.state.cart.toString()}/>
          <Home changePage={this.changePage}/>
          <Footer />
        </div>
      );
    }
    else if (this.state.page == "products") {
      return (
        <div className="App">
          <Header changePage={this.changePage} cartItemNum={this.state.cart.toString()}/>
          <Products changePage={this.changePage} addToCart={this.addToCart} cartItemNum={this.state.cart}/>
          <Footer />
        </div>
      );
    }
    else if (this.state.page == "cart") {
      return (
        <div className="App">
          <Header changePage={this.changePage} cartItemNum={this.state.cart.toString()}/>
          <Cart cartItems={this.state.cartItems} subtotal={this.state.cartSubtotal} removeFromCart={this.removeFromCart}/>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
