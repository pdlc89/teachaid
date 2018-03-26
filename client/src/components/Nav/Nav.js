import React from "react";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
        Home
        </a>
        <a href="/nominate" className="navbar-brand">
        Nominate a Student
        </a>
        <a href="/nominated" className="navbar-brand">
        Nominations for this Month
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
