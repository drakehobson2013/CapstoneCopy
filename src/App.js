import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home  from "./components/Home";
import About  from "./components/About";
// import EatLocal  from "./components/EatLocal";
// import ShopLocal  from "./components/ShopLocal";
// import Attractions  from "./components/Attractions";
// import CincyHistory  from "./components/CincyHistory";
import Contact  from "./components/Contact";
<<<<<<< HEAD
=======
import About from "./components/About"
>>>>>>> e335254efc03bcbdb0b22cd1c9012fa3277b9b06

function App() {

  return (

    <Router>
    <div className="App">
    <Navbar />
    <br/>
    <Switch>  
     <Route path="/about" component={About} />
<<<<<<< HEAD
       <Route path="/contact" component={Contact} />
       <Route path="/" component={Home} />
=======
     <Route path="/contact" component={Contact} />
     <Route path="/attraction" component={Attractions} />  
     <Route path="/shop" component={ShopLocal} />
     <Route path="/restaurant" component={EatLocal} />
     <Route exact path="/" component={Home} />
     <Route path="/history" component={CincyHistory} />
     <Route exact path="/create" component={CreateRestaurant} />
>>>>>>> e335254efc03bcbdb0b22cd1c9012fa3277b9b06
 
    </Switch> 
     <Footer /> 
    </div>
  
    </Router>
    
  );
}

export default App;
