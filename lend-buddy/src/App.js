import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Team from "./Team";
import Help from "./Help";
import Footer from "./Footer";
import Join from "./Join";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/team">
            <Header />
            <Team />
            <Footer />
          </Route>
          <Route path="/help">
            <Header />
            <Help />
            <Footer />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
