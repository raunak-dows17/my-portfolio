import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import AboutCard from './AboutCard';
import laptop from "../../Assets/laptop.png"
import Techstack from './Techstack';
import Toolstack from './Toolstack';

const About = () => {
  return (
      <Container fluid className='about-section'>
          <Particle />
          <Container>
              <Row style={{justifyContent:"center", padding: "10px"}}>
                  <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
                      <h1 style={{ fontSize: "2.1rem", paddingBottom: "20px" }} >
                          Know More <strong className='blue'>ABOUT ME</strong>
                      </h1>
                      <AboutCard/>
                  </Col>
                  <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img" >
                      <img src={ laptop } style={{width: "400px"}}  alt="Laptop" />
                  </Col>
              </Row>
              <h1 className="project-heading">
                  <strong className="blue">Skillset</strong>
              </h1>
              <Techstack />
              <h1 className="project-heading">
                  <strong className='blue'>Tools</strong> I have good understanding
              </h1>
              <Toolstack/>
          </Container>
    </Container>
  )
}

export default About
