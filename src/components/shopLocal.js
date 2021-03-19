
import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";


const Shop = props => (
 

  <div class="container ">
  <div class="row g-0">
    <div class="col">
     <div class="p-3 border bg-light"><img  id="" src={props.shop.image}  alt=""/></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
      <h4 className="card-title">{props.shop.name}</h4>
   <h5 className='card-text'>{props.shop.description}</h5>
   <p>{props.shop.address}{props.shop.city} {props.shop.state} {props.shop.zipcode}</p>
      </div>
    </div>
  </div>
</div>

  
)

export default class shopLocal extends Component {
  constructor(props) {  
    super(props); 
    
    
    
    this.state = {shops: []};  
  }
  componentDidMount() {
    axios.get('http://localhost:5000/shop/')
     .then(response => {
       this.setState({shops: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }
  shopLocal() {
    return this.state.shops.map(currentshop => {
      return <Shop shop={currentshop} key={currentshop._id}/>;
    })
  }
  render() {
    return (
    
      



      <div>

      
      <header id="header-section-shop">
      <div className="container-fluid shoptophead">
      <div className="header-text">
      <h2 className="bigger-font text-white">SHOPPING</h2>
      <p>Whether it’s luxury designer boutiques, concept shops or outlet malls.</p>
      </div>
      </div>
      </header>

      <div >
           { this.shopLocal()  }
                </div>
     

      </div>
     
      


    );
  }
}
