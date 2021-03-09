import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
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
    <Switch>
    {/* <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/restaurant" component={EatLocal} />
    <Route path="/shop" component={ShopLocal} />
    <Route path="/attraction" component={Attractions} />
    <Route path="/history" component={CincyHistory} />
    <Route path="/contact" component={Contact} /> */}
    </Switch> 
    </div>
    </Router>
  );
}

export default App;
