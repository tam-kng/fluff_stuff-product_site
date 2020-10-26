import React from 'react';
import logo from '../logo.svg';

import './App.css';
import Header from "./Header";
import Home from "./Home";
import Pillows from "./Pillows";
import Cart from "./Cart";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "home",
      cart: 0,
      cartItems: []
    };

    this.changePage = this.changePage.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.pages = {
        "home": <Home changePage={this.changePage}/>,
        "pillows": <Pillows changePage={this.changePage} addToCart={this.addToCart} cartItemNum={this.state.cart}/>,
        "cart": <Cart cartItems={this.state.cartItems}/>
    };
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  addToCart(cartItemNum, name, color, fill) {
    this.setState((state) => {
      return {
        cart: state.cart + 1,
        cartItems: state.cartItems.concat([[name, color, fill]])
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
    else if (this.state.page == "pillows") {
      return (
        <div className="App">
          <Header changePage={this.changePage} cartItemNum={this.state.cart.toString()}/>
          <Pillows changePage={this.changePage} addToCart={this.addToCart} cartItemNum={this.state.cart}/>
          <Footer />
        </div>
      );
    }
    else if (this.state.page == "cart") {
      return (
        <div className="App">
          <Header changePage={this.changePage} cartItemNum={this.state.cart.toString()}/>
          <Cart cartItems={this.state.cartItems}/>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
