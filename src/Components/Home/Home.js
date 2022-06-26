import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../Particle'
import Type from './Type'
import homelogo from "../../Assets/home-main.png"
import Home2 from './Home2'

const Home = () => {
  return (
      <section>
          <Container fluid className='home-section' id="home">
              <Particle />
              <Container className='home-content' >
                  <Row>
                      <Col md={7} className="home-header" >
                          <h1 style={{ paddingBottom: 15 }} className="heading" >
                              Hi There! {" "}
                          </h1>
                          <h1 className='heading-name' >
                              I'M
                              <strong className="main-name">RAUNAK PANDEY</strong>
                          </h1>
                          <div style={{ padding: 50, textAlign: "left" }} >
                              <Type/>
                          </div>
                      </Col>
                      <Col md={5} style={{ paddingBottom: 20 }}>
                          <img src={homelogo} alt="home pic" className='img-fluid' style={{maxHeight: 450}} />
                      </Col>
                  </Row>
              </Container>
          </Container>
          <Home2/>
    </section>
  )
}

export default Home
