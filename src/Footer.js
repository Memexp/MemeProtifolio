import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="https://twitter.com/Memexpp" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Meme.kameL"
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_marams_/"
              className="icon fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maram-kamil-9009149b/"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="maram.kamil@gmail.com" className="icon fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Maram Kamil. Images:{" "}
          <a href="https://unsplash.com">Unsplash</a>.
        </p>
      </footer>
    );
  }
}

export default Footer;
