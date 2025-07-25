import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chirag KP </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            I am currently pursuing B.E in Computer Science and Engineering at KSIT.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing VideoGames, Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching F1, NBA
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every bug I fix adds to the version of me that never gives up."{" "}
          </p>
          <footer className="blockquote-footer">Chirag KP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
