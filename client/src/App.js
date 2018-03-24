import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/Splash";
import Students from "./pages/Students";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Nominate from "./pages/Nominate";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/students/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
