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

function App() {

  return (

    <Router>
    <div className="App">
    <Navbar />
    <br/>
    <Switch>  
     <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
       <Route path="/" component={Home} />
 
    </Switch> 
     <Footer /> 
    </div>
  
    </Router>
    
  );
}

export default App;
