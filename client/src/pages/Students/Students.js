import React, { Component } from "react";
import API from "../../utils/API";
import {Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Monthly from "./award.json";


//this will display the award depending on the month
let holder = new Date();
let elm1 = holder.getMonth();
let elm2 = Object.entries(Monthly)[elm1];
let month = elm2[1];
console.log(month);

class Students extends Component {
  state = {
    students: [],
    g6Student: "",
    g7Student: "",
    g8Student: "",
    teacher: "",
    characterCounts: ""
  };

  handleFormSubmit = (event, data) => {
    event.preventDefault();
    if (this.state.g6Student || this.state.teacher) {
      API.saveStudent({
        g6Student: this.state.g6Student,
        g7Student: this.state.g7Student,
        g8Student: this.state.g8Student,
        teacher: this.state.teacher,
        characterCounts: this.state.characterCounts
      })
        .then(res => this.loadStudents(), alert("Nomination complete!"))
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Container fluid>
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h1 class="display-4">Student of the Month</h1>
            <p class="lead">You are not required to submit for all grades!</p>
          </div>
        </div>
          <div className="card-div">
          <div className="card bg-dark">
            <div className="bg-success text-white text-center card-header">
              Student of the Month Nominations
            </div>
            <div className="card-body">

              <form>
                <Input inputProps={{
                  value:this.state.g6Student,
                  onChange:this.handleInputChange,
                  name:"g6Student",
                  placeholder:"Student Name"
                }}
                label="6th Grader: "
                />
                <Input inputProps={{
                  value: this.state.g7Student,
                  onChange: this.handleInputChange,
                  name: "g7Student",
                  placeholder: "Student Name"
                }}
                label="7th Grader: "
                />
                <Input
                  inputProps={{
                    value: this.state.g8Student,
                    onChange: this.handleInputChange,
                    name: "g8Student",
                    placeholder: "Student Name"
                  }}
                  label="8th Grader: "
                />
                <Input
                  inputProps={{
                    value: this.state.characterCounts,
                    onChange: this.handleInputChange,
                    name: "characterCounts",
                    placeholder: "Character Counts Nomination"
                  }}
                  label={`${month}: `}
                />
                <Input
                  inputProps={{
                    value: this.state.teacher,
                    onChange: this.handleInputChange,
                    name: "teacher",
                    placeholder: "Teacher Name"
                  }}
                  label="Teacher: "
                />
                <div className="btn-div">
                  <FormBtn
                    disabled={!(this.state.teacher || this.state.g6Student)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Student
                  </FormBtn>
                </div>
              </form>
            </div>
          </div>
          </div>

      </Container>
    );
  }
}

export default Students;
