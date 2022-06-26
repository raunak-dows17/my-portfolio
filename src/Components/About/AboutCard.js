import React from 'react'
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
      <Card className="quote-card-view">
          <Card.Body>
              <blockquote className='blockquote mb-0'>
                  <p style={{ textAlign: "justify" }}>
                      Hi There, I am <span className='blue'>Raunak Pandey </span>
                      from <span className="blue">Delhi, India.</span>
                      <br /> I am pursuing B.Tech in Computer Science and Engineering in Jaipur National University, Jaipur.
                      <br /> <br />
                      Apart from coding, I love to!
                  </p>
                  <ul>
                      <li className="about-activity">
                          <ImPointRight/> Playing Games
                      </li>
                      <li className="about-activity">
                          <ImPointRight/> Singing Songs
                      </li>
                  </ul>
              </blockquote>
          </Card.Body>
    </Card>
  )
}

export default AboutCard
