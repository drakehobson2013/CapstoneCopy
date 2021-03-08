<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Navbar from "./components/Navbar";
// import Home  from "./components/Home";
// import About  from "./components/About";
// import EatLocal  from "./components/EatLocal";
// import ShopLocal  from "./components/ShopLocal";
// import Attractions  from "./components/Attractions";
// import CincyHistory  from "./components/CincyHistory";
// import Contact  from "./components/Contact";
=======
import Navbar from "./components/navbar"
import React from "react"

>>>>>>> 377812d7e7c3597b2cb82eee8553bf82c2845b38

function App() {
  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
    <Navbar />
    <br/>
    {/* <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/eat" component={EatLocal} />
    <Route path="/shop" component={ShopLocal} />
    <Route path="/visit" component={Attractions} />
    <Route path="/learn" component={CincyHistory} />
    <Route path="/contact" component={Contact} /> */}
      
=======
      <Navbar/>
>>>>>>> 377812d7e7c3597b2cb82eee8553bf82c2845b38
    </div>
    </Router>
  );
}

export default App;
