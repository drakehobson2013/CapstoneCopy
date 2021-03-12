import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import FlyingPig from "./hoc/FlyingPig.jpg";

export default class Navbar extends Component {


  render() {
    return (
<nav className="navbar navbar-expand-lg">
  <a href="/" className="navbar-brand"><img className="FlyingPig" src={FlyingPig} alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navBarSupportedContent">
    <ul className="navbar-nav mr-auto"/>
      <li className="nav-item active"/>
        <a href="/" className="nav-link">Home</a>
      </li>
      <li className="nav-item active">
      <a href="/about" className="nav-link">About</a>
      </li>
      <li className="nav-item active">
      <a href="/contact" className="nav-link">Contact</a>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Things To Do
          </a>
        <div className="dropdown-menu">
        
      <div class="w3-top">
  <div class="w3-bar w3-black w3-card">
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>

  {/* change href to routes */}
    <a href="/" class="w3-bar-item w3-button w3-padding-large">Home</a>
    <a href="/about" class="w3-bar-item w3-button w3-padding-large w3-hide-small">About</a>
    <a href="/contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small" >Contact</a>
 
    <div class="w3-dropdown-hover w3-hide-small">
      <button class="w3-padding-large w3-button" title="More">Todos <i class="fa fa-caret-down"></i></button>     
      <div class="w3-dropdown-content w3-bar-block w3-card-4">
        <a href="#" class="w3-bar-item w3-button">Eat local</a>
        <a href="#" class="w3-bar-item w3-button">Shop local</a>
        <a href="#" class="w3-bar-item w3-button">Attractions</a>
        <a href="#" class="w3-bar-item w3-button">Cincy History</a>
      </div>
    </div>
    <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
  </div>
</nav>
    );
  }
}


