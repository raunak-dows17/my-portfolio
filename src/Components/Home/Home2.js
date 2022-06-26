import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/my-image.svg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6rem" }}>
              LET ME <span className="blue">INTRODUCE MYSELF</span>
            </h1>
            <p className="home-about-body">
              I fell in love with coding and I have learnt least,
              <br />
              <br />I have well knowledge and understanding of programming
              languages like
              <i>
                {" "}
                <b className="blue">C++, Python, Javascript</b>
              </i>
              <br />
              <br />
              My feild of interest are building new
              <i>
                {" "}
                <b className="blue">Web Applications.</b>
              </i>
              <br />
              <br />
              Also I love to develop web apps using
              <i>
                {" "}
                <b className="blue">Node.js</b> and
              </i>
              &nbsp;like
              <i>
                <b className="blue">React.js and Express.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} alt="my-avatar" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>I'M ON</h1>
            <p>
              You can <span className="blue">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/raunak-dows17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raunak-pandey-93b92a224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/RaunakP17102002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/raunak_pandey_1710/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;
