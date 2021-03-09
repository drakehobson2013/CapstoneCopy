import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/navbar";
// import Home  from "./components/Home";
// import About  from "./components/About";
// import EatLocal  from "./components/EatLocal";
// import ShopLocal  from "./components/ShopLocal";
// import Attractions  from "./components/Attractions";
// import CincyHistory  from "./components/CincyHistory";
// import Contact  from "./components/Contact";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <br/>
    {/* <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/eat" component={EatLocal} />
    <Route path="/shop" component={ShopLocal} />
    <Route path="/visit" component={Attractions} />
    <Route path="/learn" component={CincyHistory} />
    <Route path="/contact" component={Contact} /> */}
      
    </div>
    </Router>
  );
}

export default App;
