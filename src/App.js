import React from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
//import { Navigation, Footer, AboutMe, Work, Art, Contact, Xkeeper } from "./components";
// import { Scroll, AboutMe, Work, Art, Contact, Xkeeper, Omega, Buildabear, Findyourzen, Bloom, Nbjc, BSC, Cadence } from "./components";
import { Typography } from "@material-ui/core";
function App() {
  return (
    <div className="App" style={{padding: "20% 20% 20% 20%", textAlign:"center", backgroundColor: "#F2ECE2", minHeight: "100vw"}}>
      <Typography>This site has been rebuilt @ samanthaoh.com</Typography>
      <a
                href="https://9samioh.github.io/samioh/#/"
                rel="noopener noreferrer"
                style={{color: "#333"}}
              >
                <Typography variant="body2" sx={{color: "#333"}}>TAKE ME THERE!!! :)</Typography>
              </a>
      {/* <Router>
      <Scroll>
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
          <Route path="/bsc" exact component={() => <BSC />} />
          <Route path="/cadence" exact component={() => <Cadence />} />

        </Switch>
        </Scroll>
      </Router> */}
    </div>
  );
}

export default App;
