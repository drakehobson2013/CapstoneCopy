

import React, { Component } from 'react';

export default class navbar extends Component {
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



