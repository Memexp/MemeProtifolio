import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <section id="intro" className="main">
        <h2>About Me</h2>
        <p>
          My name is <b>{this.props.name}</b> Fresh-Graduated student from
          Princess Nourah University
          <br />
          Computer Sciences - Second-Honor Degree
          <br />
          {this.props.age}years - Jeddah
        </p>
      </section>
    );
  }
}

export default AboutMe;
