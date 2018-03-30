import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Students from "./pages/Students";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Nominate from "./pages/Nominate";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/students/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
