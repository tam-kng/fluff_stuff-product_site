import React from 'react';
import logo from '../logo.svg';

import './App.css';
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

let pages = {
  "home": <Home />,
  "pillows": "pillows",
  "cart": "cart"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: "home"
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {pages[this.state.pageNumber]}
        <Footer />
      </div>
    );
  }
}

export default App;
