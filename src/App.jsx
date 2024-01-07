import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import {Route, Switch} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import imgb from "./components/back.jpg";
import Navbr from "./components/Navbar/Navbr"
import NavbarElem from "./components/Navbar/NavbarElements"


class App extends Component {
  constructor(){
    super()
    this.state={
      fullName:"",
      username:"",
      email:"",
      password:""
    }
    this.changefullName=this.changefullName.bind(this)
    this.changeusername=this.changeusername.bind(this)
    this.changeemail=this.changeemail.bind(this)
    this.changepassword=this.changepassword.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }
changefullName(event){
  this.setState({
    fullName:event.target.value
  })
}

changeusername(event){
  this.setState({
    username:event.target.value
  })
}

changeemail(event){
  this.setState({
    email:event.target.value
  })
}

changepassword(event){
  this.setState({
    password:event.target.value
  })
}
onSubmit(event){
  event.preventDefault()
  const connection={
    fullName:this.state.fullName,
    username:this.state.username,
    email:this.state.email,
    password:this.state.password
  }
  axios.post('http://localhost:4000/app/signup', connection)
  .then(response=>console.log(response.data))
  this.setState({
    fullName:"",
    username:"",
    email:"",
    password:""
  })
}



  render(){
    return(

      
      <div style= {{ backgroundImage:`url(${imgb})`, backgroundSize:'100%' }}>
       <Navbr />
<br></br>
<br></br>
<br></br>
<br></br>
<div className="container">
  <div class="row">
  <div class="col-sm-3">

  </div>
  <div class="col-sm-6">
  <br></br>
  <div className="form-div border rounded px-5"  style= {{backgroundColor:"white"}}>
    <form onSubmit={this.onSubmit}>
      <br></br><br></br>
      <center><h5>User Registration</h5></center><br></br>
      
      <input type="text" placeholder="Enter Name" onChange={this.changefullName} value={this.state.fullName} className="form-control form-group" /><br></br>
      <input type="text" placeholder="Enter Username" onChange={this.changeusername} value={this.state.username} className="form-control form-group" /><br></br>
      <input type="text" placeholder="Enter Email Address" onChange={this.changeemail} value={this.state.email} className="form-control form-group" /> <br></br>
      <input type="password" placeholder="Enter Password" onChange={this.changepassword} value={this.state.password} className="form-control form-group" />
    <br></br><center><input type="submit" className="btn btn-primary btn-block" value="SUBMIT" /></center><br></br>
    </form>
  </div>
</div>
<div class="col-sm-3"></div>
      </div>
      </div>
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
      <br></br>

      <div style={{backgroundColor:'#999999'}}>
        <br></br>
        <center>Developed by: anantsinxh@gmail.com</center>
        <br></br>
    </div>
      </div>
      
    );
  }
}
export default App;
