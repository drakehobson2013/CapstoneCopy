import React, { Component } from 'react';
<<<<<<< HEAD

export default class Navbar extends Component {
=======
import { Link } from 'react-router-dom';
export default class navbar extends Component {
>>>>>>> 377812d7e7c3597b2cb82eee8553bf82c2845b38
  render() {
    return (
        <nav>
        <div className="logo">
          <h4>The Nav</h4>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Things to do</a></li>
        </ul>
      </nav>

    );
  }
}


