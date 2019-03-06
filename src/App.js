import React, { Component } from "react";
import "./App.css";

import Sections from "./Sections";
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header" className="alt" />
        <Sections name="Maram Kamil" age="24" />
        <Footer />
      </div>
    );
  }
}

export default App;
