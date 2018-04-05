import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Students from "./pages/Students";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/students/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
