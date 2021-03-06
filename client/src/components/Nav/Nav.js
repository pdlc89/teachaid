import React, { Component } from 'react';
import Auth from "../../utils/Auth";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./students.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./nominate.html">
                Nominate
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Students
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Current Month
                </a>
                <a className="dropdown-item" href="#">
                  History
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Donate
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a
              className="btn btn-outline-warning my-2 my-sm-0"
              href="/logout"
            >
              Logout
            </a>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;

// <div className="container-fluid">
//   <div className="navbar-nav">
//     <a href="/" className="navbar-brand">
//       Home
//         </a>
//     <a href="/nominate" className="navbar-brand">
//       Nominate a Student
//         </a>
//     <a href="/nominated" className="navbar-brand text-white">
//       Nominations for this Month
//         </a>
//   </div>
// </div>