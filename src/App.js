import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Menu from "./components/Menu/Menu";
import AboutMe from "./containers/AboutMe/AboutMe";
import Portfolio from "./containers/Portfolio/Portfolio";
import News from "./containers/News/News";
import Contact from "./containers/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutMe/" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
