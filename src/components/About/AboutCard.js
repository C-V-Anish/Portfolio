import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">C.V.Anish </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br/>
            <br /> I am a final year student pursuing a B.Tech degree in <span className="purple">Computer Science and Engineering</span>
            &nbsp;<span className="purple">at IIIT Bhubaneswar.</span>
            <br />
            <br/>
            
            Apart from coding and development, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports - Cricket , Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
