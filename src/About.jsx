import React from "react";
import Navbr from "./components/Navbar/Navbr"
import NavbarElem from "./components/Navbar/NavbarElements"
import aboutimg from './components/about.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return(
        <>
        <Navbr />
        <div style= {{ backgroundImage:`url(${aboutimg})`, backgroundSize:'100%', backgroundRepeat:'no' }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br><br></br>
            <Container>
      <Row>
        <Col xs><center><p style={{color:'#999999'}}>At athlyx, we provide the best trained professionals with industry leading equipments, we started as a company that focused on nutrition assistance and curated workout plans, with growing demand and successs in the industry we are now a pround owner of over 12 branches accross the nation, providing employment to over 2000 personnel. Join us for fulfilling your fitness goals.</p></center></Col>
        <Col xs={{ order: 1 }}></Col>
        <Col xs={{ order: 1 }}></Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
        </div>
        <div style={{backgroundColor:'#999999'}}>
        <br></br>
        <center>Developed by: anantsinxh@gmail.com</center>
        <br></br>
    </div>
        </>
    )
}

export default About;