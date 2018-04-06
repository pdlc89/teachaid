import React, { Component } from 'react';
import API from "../../utils/API";
import Auth from '../../utils/Auth';
import Background from './bg.jpg';
import { Input } from "../../components/Form";
import './Signup.css';

var styles = {
    backgroundImage: 'url('+Background+')'
};

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    errorMessage: null
  };

  componentDidMount() {
  };

  authenticate = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        Auth.authenticateUser(res.data.token);

        // hard redirect to / to reload all the state and nav
        window.location.href = "/students";
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  signUp = () => {
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };

    API.signUp(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });

        // authenticate the user after successful sign up
        this.authenticate();
      })
      .catch(err => this.setState({ errorMessage: err.response.data.message }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = event => {
    event.target.select();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
      this.signUp();
    } else {
      this.setState({ errorMessage: "Please enter all required fields to sign up."})
    }
  };

  render() {
    return (
        <div className="container" style={ styles }>
          <div className="container login" align="center">
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <div className="col align-self-center box">
                  <form>
                    <div className="form-group">
                      <p className="loginButton"><a href="/login" className="btn btn-info">Login</a></p>
                    </div>
                    <hr></hr>
                    <div className="form-group">
                    <Input
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      onFocus={this.handleFocus}
                      name="firstName"
                      placeholder="First Name (required)"
                      className="form-control"
                      required=""
                      autoFocus={true}
                     />
                    </div>
                    <div className="form-group">
                    <Input
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      onFocus={this.handleFocus}
                      name="lastName"
                      placeholder="LastName (required)"
                      className="form-control"
                      required=""
                      autoFocus={true}
                     />
                    </div>
                    <div className="form-group">
                    <Input
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      onFocus={this.handleFocus}
                      name="email"
                      placeholder="Email (required)"
                      className="form-control"
                      required=""
                      autoFocus={true}
                    />
                    </div>
                    <div className="form-group">
                    <Input
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      type="password"
                      placeholder="Password (required)"
                      className="form-control"
                      required=""
                    />
                    </div>
                    <button
                      disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.password.length >= 6)}
                      onClick={this.handleFormSubmit}
                      className="btn btn-lg btn-primary btn-block"
                    >
                      Sign Up
                    </button>
                  </form>
                  
                </div>
              </div>
              <div className="col-md-3" />
            </div>
                <p className="backButton"><a href="/" className="btn btn-success">BACK</a></p>
          </div>
        </div>
    );
  }
}

export default Signup;
