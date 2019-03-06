import React, { Component } from "react";

class Awards extends Component {
  render() {
    return (
      <section id="intro" className="main">
        <span className="icon fa-diamond major" />
        <h2>Awards</h2>
        <p>
          <b>FekraTech</b> <br />
          First Place Winner, Ideas Track
        </p>
        <ul className="actions">
          <li>
            <a
              href="https://fekratech.gov.sa/"
              className="button big"
              target="_blank"
            >
              Learn More
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Awards;
