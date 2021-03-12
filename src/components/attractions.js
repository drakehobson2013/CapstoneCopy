import React, {Component} from 'react';
import "../index.css";
import KingsIsland from './Images/KingsIsland.jpg';
import Zoo from './Images/CincinnatiZoo.jpg';
import Museum from './Images/CincyMuseum.jpg';
import Coney from './Images/ConeyIsland.jpg';


 class Attractions extends Component {
  render() {
    return (
      <div>
        <h2 >Cincinnati Attractions - under contruction</h2>


        <div className="card mb-3 hcard" >
        <div className="row g-0">
        <div class="col-md-4">
        <img src={KingsIsland} alt="KI" id="KI" />
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5> Kings Island</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cumque.</p>

        </div>

        </div>

        </div>
        </div>

        <div className="card mb-3 hcard" >
        <div className="row g-0">
        <div class="col-md-4">
        <img src={Museum} alt="Museum" id="Museum" />
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5> Cincinnati Museum Center</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cumque.</p>
        </div>
        </div>
        </div>
        </div>

        <div className="card mb-3 hcard" >
        <div className="row g-0">
        <div class="col-md-4">
        <img src={Zoo} alt="zoo" id="zoo" />
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5> Cincinnati Zoo and Botanical Gardens</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cumque.</p>
        </div>
        </div>
        </div>
        </div>

        <div className="card mb-3 hcard" >
        <div className="row g-0">
        <div class="col-md-4">
        <img src={Coney} alt="Coney" id="Coney" />
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5> Coney Island</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cumque.</p>
        </div>
        </div>
        </div>
        </div>

      </div>

      
    )
  }
}

export default Attractions