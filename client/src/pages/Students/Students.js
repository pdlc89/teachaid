import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nominate from '../../components/Form/Nominate'
import Card from "../../components/Card";

class Students extends Component {
  state = {
    students: [],
    name: "",
    grade: "",
    teacher: "",
    award: ""
  };

  componentDidMount() {
    this.loadStudents();
    console.log(this);
  }

  loadStudents = () => {
    API.getStudents()
      .then(res =>
        this.setState({ students: res.data, name: "", grade: "", teacher: "", award: "" })
      )
      .catch(err => console.log(err));
  };

  deleteStudent = id => {
    API.deleteStudent(id)
      .then(res => this.loadStudents())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h1 class="display-4">Student of the Month</h1>
            <p class="lead">Simply resubmit to renominate</p>
          </div>
        </div>
          <div className="card-div">
            < Nominate award="6th Grade SOM" />
            < Nominate award="7th Grade SOM"/>
            < Nominate award="8th Grade SOM"/>
          </div>
          <div className="card-div">
        <Nominate award="Character Counts" size={{width:600}}/>
          </div>
      </Container>
    );
  }
}

export default Students;
