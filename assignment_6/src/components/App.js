import React from 'react';

import './App.css';
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Footer from "./Footer";

// main controller of child components
class App extends React.Component {
  constructor(props) {
    super(props);

    // stores the current page, number of items in the cart, and items in the cart
    this.state = {
      page: "home",
      cart: 0,
      cartItems: []
    };

    this.changePage = this.changePage.bind(this);
    this.addToCart = this.addToCart.bind(this);

    // dict object with string denoting page name and the component in html
    this.pages = {
        "home": <Home changePage={this.changePage}/>,
        "products": <Products changePage={this.changePage} addToCart={this.addToCart} cartItemNum={this.state.cart}/>,
        "cart": <Cart cartItems={this.state.cartItems}/>
    };
  }

  // switches pages
  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  // adds an item to cart
  addToCart(cartItemNum, name, color, fill, cost) {
    this.setState((state) => {
      return {
        cart: state.cart + 1,
        cartItems: state.cartItems.concat([{name, color, fill, cost}])
      }
    });
  }

  // render html based on the current page name stored in state
  render() {
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
          <Cart cartItems={this.state.cartItems}/>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
