import React, { Component } from "react";
import img1 from "./images/pic02.jpg";

class More extends Component {
  render() {
    return (
      <section className="main items">
        <article className="item">
          <h3>Graduation Project</h3>
          <p>
            In our project, we focus on the problem of Automated Personality
            Classification (APC). Firstly, we investigate possible improvements
            of the existing solutions to the problem of APC, for which we use
            different combinations of the APC linguistic analysis in text format
            for psychological trait measurements, and learning algorithms. We
            consider human resource recruitment in education fields to
            classNameify teachers according to their personality results
            according to (Five Factors Model of Personality Traits) using
            advanced data mining algorithm (Neural Network) by providing the
            algorithm with text inputs for our application (EduHR) as a
            simulation of interviews questions and possible answers.
          </p>
          <ul className="actions">
            <li>
              <a
                href="https://drive.google.com/open?id=0B6VpV48eaQ4VZEFfRXlIUVpBYnRCOWJKcVBrdk81UDY4SzZz"
                className="button"
                target="_blank"
              >
                for More
              </a>
            </li>
          </ul>
        </article>
        <article className="item">
          <header>
            <a href="#">
              <img src={img1} alt="" />
            </a>
            <h3>Intrests</h3>
          </header>
          <p>
            -Watching TV shows, anime.
            <br />
            -Collecting Figures
            <br />
            -Programming
            <br />
            -Data Science
          </p>
          <ul className="actions">
            <li>
              <a
                href="https://www.tvtime.com/en/user/3490450/profile"
                className="button"
                target="_blank"
              >
                Check my favorite shows
              </a>
            </li>
          </ul>
        </article>
      </section>
    );
  }
}
export default More;
