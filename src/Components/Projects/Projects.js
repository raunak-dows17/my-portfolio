import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";
import sayin from "../../Assets/Sayin-Chat-App.png";
import MusicPlayer from "../../Assets/Music-Player.png";
import WeatherReport from "../../Assets/Weather-Report-App.png";
import Jarvis from "../../Assets/project-jarvis.png"
import Snake from "../../Assets/Project-Snake.png"
import Portfolios from "../../Assets/portfolio-influencer.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="blue">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my <strong className="blue"> Projects </strong> I'have{" "}
          <span className="blue"> worked.</span>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={sayin}
              isBloag={false}
              title="Sayin Chat"
              description="Personal Chat application to chat with your Freind either in group or in One-o-one build with Mongodb, Express.js, React.js, Node.js. This app allows user for realtime messaging one-o-one aur in group. And this is fully responsive you can see slightly different UI in Mobile than PC."
              ghLink="https://github.com/raunak-dows17/Realtime-Chat-Application"
              demoLink="https://sayin.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={MusicPlayer}
              isBloag={false}
              title="Music Player"
              description="A simple Music Player app which Contains songs of my favorite singer.It contains more than 20 songs. User can also Random songs from playist from Navbar. You can access code from github link and try this amazing application with romantic songs in voice of Arijit."
              ghLink="https://github.com/raunak-dows17/Realtime-Chat-Application"
              demoLink="https://raunak-dows17.github.io/Arijit_Singh_Playlist.github.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={WeatherReport}
              isBloag={false}
              title="Wether Report"
              description="This is a simple weather report display application which shows the current weather report sunrise sunset timmings of the city you searched. In this I used React.js and openweathermap API to fetch weather reports. You can try this app in Demo link and can access code from Github link"
              ghLink="https://github.com/raunak-dows17/Weather-Report"
              demoLink="https://weather-report-007.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Portfolios}
              isBloag={false}
              title="Portfolios"
              description="This is the demo of my one of the work for our Group Project. In this we provides portfolios for those who doesn't know web development. In this we make portfolio templates and sell them this Project is still in Progress.... After it will complete I will upload it on github you can access from there. I contributed 4 portfolios templates in our Group Project. "
              ghLink="https://github.com/raunak-dows17/Influencer_porfolio.github.io"
              demoLink="https://raunak-dows17.github.io/Influencer_porfolio.github.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Jarvis}
              isBloag={false}
              title="Jarvis Personal Assistant"
              description="This is the intelligent Personal Assistant which provides voice recoginstion and response according to your command. Its get query from your voice it match the givrn queris with your voice and response acci=ording to that. I used python to make this amazing application. You can access code from github link"
              ghLink="https://github.com/raunak-dows17/Jarvis"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={Snake}
              isBloag={false}
              title="Dr. Snake Game"
              description="This is the simple old keypads phone like snake Game you can controls snake movements by your arrows keys in the keyboard. I used Python to make this application. This is the very basic Project I make when I started learning Python. You can access code from Github link."
              ghLink="https://github.com/raunak-dows17/Dr.Snake"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects
