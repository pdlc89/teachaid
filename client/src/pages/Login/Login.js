import React, { Component } from 'react';
import Background from './bg.jpg';
import './Login.css';

var styles = {
    backgroundImage: 'url('+Background+')'
};

class Login extends Component {

  render() {
    return (
        <div className="container" style={ styles }>
          <div className="row " align="center">
            <h1>LETS GET YOU SETTLED IN</h1>
          </div>
          <div className="container login" align="center">
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <div className="col align-self-center box">
                  <form>
                    <div className="form-group">
                      <p className="lead"><a href="/" className="btn btn-success">Back to Landing Page</a></p>
                    </div>
                    <div className="form-group">
                      <p className="lead"><a href="/" className="btn btn-danger">Continue with Google+</a></p>
                    </div>
                    <hr></hr>
                    <div className="form-group">
                      <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="First name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Last name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <p className="lead"><a href="/nominate" className="btn btn-default">Sign up</a></p>
                  </form>
                </div>
              </div>
              <div className="col-md-3" />
            </div>
          </div>
        </div>
    );
  }
}

export default Login;
