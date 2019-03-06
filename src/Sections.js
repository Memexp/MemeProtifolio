import React, { Component } from "react";
import AboutMe from "./AboutMe";
import Awards from "./Awards";
import More from "./More";

class Sections extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <AboutMe name={this.props.name} age={this.props.age} />
          <Awards />
          <More />
        </div>
      </div>
    );
  }
}

export default Sections;
