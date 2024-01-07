import React from "react";
import Navbr from "./components/Navbar/Navbr"
import NavbarElem from "./components/Navbar/NavbarElements"
import homeimg from "./components/home.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap';
import plana from "./components/plana.jpg"
import planb from "./components/planb.jpg"
import planc from "./components/planc.jpg"


const Home = () => {
    return(
        <div>
            <div style= {{ backgroundImage:`url(${homeimg})`, backgroundSize:'100%' }}>
            <Navbr />
        
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
        <center></center>
        <br></br>
        <Container>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }}><h1 style= {{color:'white'}}>Athlx</h1></Col>
        <Col xs={{ order: 1 }}></Col>
        <Col xs={{ order: 1 }}><h3>Start your journey</h3><a href="/userreg"><Button variant="outline-secondary">Enroll Now</Button></a></Col>
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
        
        <br></br>
            </div>
            <br></br>
            <br></br>
            <div><p><i><center>Elevate your fitness journey with Athlx. Experience expert guidance, diverse workouts, and personalized nutrition advice. Set and track your goals, connect with a supportive community, and stay updated on the latest fitness trends. With flexible scheduling and a free trial, there's no better time to start your fitness transformation. Visit our branch today and discover a fitter, healthier you. Don't wait, join us now!</center></i></p></div>
            <br></br>
            <br></br>
            <center><h3>Facilities</h3></center>
            <br></br>
            
            <Container>
      <Row>
        <Col xs><center><div class="card" style={{width: 325}}>
  <img  class="card-img-top" src={plana} height="200" width="350"></img>
  <div class="card-body">
    <p class="card-text">Crossfit</p>
  </div>
</div></center></Col>
        <Col xs><center><div class="card" style={{width: 325}}>
  <img  class="card-img-top" src={planb} height="200" width="350"></img>
  <div class="card-body">
    <p class="card-text">Weightlifting</p>
  </div>
</div></center></Col>
        <Col xs><center><div class="card" style={{width: 325}}>
  <img  class="card-img-top" src={planc} height="200" width="350"></img>
  <div class="card-body">
    <p class="card-text">Cardio Sports</p>
  </div>
</div></center></Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
    <div style={{backgroundColor:'#999999'}}>
        <br></br>
        <center>Developed by: anantsinxh@gmail.com</center>
        <br></br>
    </div>

        
        </div>
    )
}

export default Home;