import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import FlyingPig from "./hoc/FlyingPig.jpg";

export default class Navbar extends Component {


  render() {
    return (
<nav className="navbar navbar-expand-lg top">
  <a href="/" className="navbar-brand"><img className="FlyingPig" src={FlyingPig} alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navBarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
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
        
        <a href="/restaurant" className="dropdown-item">Eat local</a>
        <a href="/shop" className="dropdown-item">Shop local</a>
        <a href="/attraction" className="dropdown-item">Attractions</a>
        <a href="/history" className="dropdown-item">Cincy History</a>
        </div>
      </li>
    </ul>
    <form action="" className="form-inline my-2 my-lg-0">
      <input type="search" className="form-control mr-sm-2" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark my-2 my-sm-0">Search</button>
    </form>
  </div>
  </nav>
);
  
    }
  }

