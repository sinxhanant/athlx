//<Switch>
//<Router exact path ="/" component={Home}/>
//<Router exact path="/about" component={About}/>
//<Router exact path="/services" component={Services}/>
//<Router exact path="/contact" component={Contact}/>
//</Switch>

//<BrowserRouter>
//<Switch>
//<Route exact path ="/home" component={Home}/>
//</Switch>
//</BrowserRouter>

import React from "react";
import Navbr from "./components/Navbar/Navbr"
import NavbarElem from "./components/Navbar/NavbarElements"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = () => {
    return(
        <>
        <div>
        <Navbr />


        <h3><center>Contact us</center></h3>
        <br></br>
        <div>
        <Container>
      <Row>
        <Col xs><center>Delhi-NCR<br></br> <i>Address:234, Sector 54, Gurgaon, Haryana 122001 <br></br> Contact No.2384723984</i></center></Col>
        <Col xs><center>Mumbai<br></br><i>Address:23, Sector 32, Navi Mumbai, Maharastra 234234 <br></br> Contact No.2385654984</i></center></Col>
        <Col xs><center>Lucknow<br></br><i>Address:232/2, Block D, Lucknow, U.P 223302 <br></br> Contact No.233433984</i></center></Col>
      </Row>
    </Container>
        </div>
        <div style={{backgroundColor:'#999999'}}>
        <br></br>
        <center>Developed by: anantsinxh@gmail.com</center>
        <br></br>
    </div>

        </div>
        
        </>
    )
}

export default Contact;
      