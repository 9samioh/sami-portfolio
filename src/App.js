import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//import { Navigation, Footer, AboutMe, Work, Art, Contact, Xkeeper } from "./components";
import { Scroll, AboutMe, Work, Art, Contact, Xkeeper, Omega, Buildabear, Findyourzen, Bloom, Nbjc } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
      <Scroll>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={() => <Work />} />
          <Route path="/aboutme" exact component={() => <AboutMe />} />
          <Route path="/art" exact component={() => <Art />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/xkeeper" exact component={() => <Xkeeper />} />
          <Route path="/omega" exact component={() => <Omega />} />
          <Route path="/buildabear" exact component={() => <Buildabear />} />
          <Route path="/findyourzen" exact component={() => <Findyourzen />} />
          <Route path="/bloom" exact component={() => <Bloom />} />
          <Route path="/nbjc" exact component={() => <Nbjc />} />
        </Switch>
        {/* <Footer /> */}
        </Scroll>
      </Router>
    </div>
  );
}

export default App;
