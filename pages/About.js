import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgdash from '../img/imgdash.png'; // Ensure correct path
import '../css/About.css'; // Assuming styles are in About.css


const About = () => {
  return (
    <Container fluid className="about-container">
      <Row className="align-items-center about-row">
        <Col md={6} className="text-column">
          <Typography variant="h1" component="h1">
            About us 
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant="h5">
          YaData: Driving Business Innovation with Data Intelligence, Power Virtual Agents, Power BI, PowerApps, and AI Builder
            <br /><br />
            Strategic Data Planning and Analysis: Crafting tailored data strategies that align with your business goals.
            <br /><br />
            Advanced Data Visualization with Power BI: Transforming complex data into clear, actionable insights using Power BI's robust visualization
            <br /><br />
             AI-Powered Automation with AI Builder: Integrating AI Builder for smart automation and efficient workflows.
          </Typography>
        </Col>

      

        <Col md={6} className="image-column">
          <img src={imgdash} alt="About Us" className="about-image" />
        </Col>
      </Row>
    </Container>

    
  );
}

export default About;
