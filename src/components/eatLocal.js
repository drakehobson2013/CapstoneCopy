import React, { Component } from 'react';
import axios from 'axios';

const Restaurant = props => (
  <tr>
    <td>{props.restaurant.name}</td>
    <td>{props.restaurant.description}</td>
    <td><img src={props.restaurant.image} alt=""/></td>
    <td>{props.restaurant.address}</td>
    <td>{props.restaurant.city}</td>
    <td>{props.restaurant.state}</td>
    <td>{props.restaurant.zipcode}</td>
  </tr>
)

export default class EatLocal extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {restaurants: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/restaurant/')
     .then(response => {
       this.setState({ restaurants: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  eatLocal() {
    return this.state.restaurants.map(currentrestaurant => {
      return <Restaurant restaurant={currentrestaurant} key={currentrestaurant._id}/>;
    })
  }
  render() {
    return (
        
      <div className="text-center">
        <h1>Get a taste of Cincinnati!</h1>
        <span >If you like dining out, then Cincinnati is a great town for your taste buds. We have so many wonderful options that span every type of cuisine and every imaginable setting. Whether you’re an avid foodie or you prefer a classic burger and fries, your dream restaurant is waiting for you in the Queen City. If you’d like to try a few new places that are some of the best restaurants in Cincinnati, then consider starting with this list. These restaurants you’ll want to eat at in Cincinnati are diverse, all over town, and offer something for everyone.</span>
        <table className="table">
    <thead className="thead-light">
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zipcode</th>
      </tr>
    </thead>
    <tbody>
      { this.eatLocal() }
    </tbody>
  </table>
</div>
      


    );
  }
}
