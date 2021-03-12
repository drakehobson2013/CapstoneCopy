import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home  from "./components/Home";
import ShopLocal  from "./components/ShopLocal";
import Attractions  from "./components/Attractions";
import EatLocal  from "./components/EatLocal";
import CincyHistory  from "./components/CincyHistory";
import Contact  from "./components/Contact";
import About from "./components/About"
import CreateRestaurant from "./components/CreateRestaurant"
import CreateHistory from "./components/CreateHistory"

function App() {

  return (

    <Router>
    <div className="App">
    <Navbar />
    <br/>
    <Switch>  
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route path="/attraction" component={Attractions} />  
     <Route path="/shop" component={ShopLocal} />
     <Route path="/restaurant" component={EatLocal} />
     <Route exact path="/" component={Home} />
     <Route path="/history" component={CincyHistory} />
     <Route path="/createRestaurant" component={CreateRestaurant} />
     <Route path="/createHistory" component={CreateHistory} />
 
    </Switch> 
     <Footer /> 
    </div>
  
    </Router>
    
  );
}

export default App;
