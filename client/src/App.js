import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Students from "./pages/Students";
import Detail from "./pages/Detail";
import Logout from "./components/Logout";
import NoMatch from "./pages/NoMatch";
<<<<<<< HEAD
import Nav from "./components/Nav";
//import Splash from "./pages/Splash";
import Nominated from "./pages/Nominated";
import History from "./pages/History";
=======
import Signup from "./pages/Signup";
// import Nominate from "./pages/Nominate";
>>>>>>> updated local-passport auth

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
<<<<<<< HEAD
        {/*<Route exact path="/" component={Splash}/>*/}
        <Route exact path="/nominated" component={Nominated} />
        <Route exact path="/nominate" component={Students} />
        <Route exact path="/history" component={History} />
        {/*<Route exact path="/students/:id" component={Detail} />*/}
=======
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/students" component={Students} />
        <Route exact path="/students/:id" component={Detail} />
        <Route exact path="/logout" component={Logout} />
>>>>>>> updated local-passport auth
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
