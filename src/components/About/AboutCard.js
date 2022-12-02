import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tatyana Dzhura </span>
            from <span className="purple"> New York City.</span>
            <br />I am a software developer looking for new job opportunities.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do:
          </p>
          <br />
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Attending Music Festivals
            </li>
            <li className="about-activity">
              <ImPointRight /> Hunting For Cheap Flight Tickets 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
