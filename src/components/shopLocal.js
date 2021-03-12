import React, {Component} from 'react';
import "../index.css";
import Kenwood from './Images/KenwoodTowneCtr.jpg';
import Northgate from './Images/NorthgateMall.jpg';
import Newport from './Images/Newport.jpg';
import Rookwood from './Images/Rookwood.jpg';


 class ShopLocal extends Component {
  render() {
    return (
      <div>
      <h2>Cincinnati Shopping Page - under contruction</h2>


      <div className="card mb-3 hcard" >
      <div className="row g-0">
      <div class="col-md-4">
      <img src={Kenwood} alt="Kenwood" id="Kenwood" />
      </div>
      <div className="col-md-8">
      <div className="card-body">
      <h5> Kenwood Towne Center</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cumque.</p>

      </div>

      </div>

      </div>
      </div>

      <div className="card mb-3 hcard" >
      <div className="row g-0">
      <div class="col-md-4">
      <img src={Northgate} alt="Northgate" id="Northgate" />
      </div>
      <div className="col-md-8">
      <div className="card-body">
      <h5> Northgate Mall</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cumque.</p>
      </div>
      </div>
      </div>
      </div>

      <div className="card mb-3 hcard" >
      <div className="row g-0">
      <div class="col-md-4">
      <img src={Rookwood} alt="Rookwood" id="Rookwood" />
      </div>
      <div className="col-md-8">
      <div className="card-body">
      <h5> Rookwood Commons and Pavilion </h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cumque.</p>
      </div>
      </div>
      </div>
      </div>

      <div className="card mb-3 hcard" >
      <div className="row g-0">
      <div class="col-md-4">
      <img src={Newport} alt="Newport" id="Newport" />
      </div>
      <div className="col-md-8">
      <div className="card-body">
      <h5> Newport on the Levee</h5>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, cumque.</p>
      </div>
      </div>
      </div>
      </div>

    </div>
    )
  }
}

export default ShopLocal