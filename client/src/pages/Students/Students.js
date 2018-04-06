import React, { Component } from "react";
import Auth from '../../utils/Auth';
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Monthly from "./award.json";
import { BrowserRouter as Route, Redirect } from "react-router-dom";



//this will display the award depending on the month
let holder = new Date();
let elm1 = holder.getMonth();
let elm2 = Object.entries(Monthly)[elm1];
let month = elm2[1];

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
                                    value: this.state.g6Student,
                                    onChange: this.handleInputChange,
                                    name: "g6Student",
                                    placeholder: "Student Name"
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
  render() {
    return (
      Auth.isUserAuthenticated() ? (
      <div>
        <Nav />
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Nominate a Student</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.teacher}
                onChange={this.handleInputChange}
                name="teacher"
                placeholder="Teacher (required)"
              />
              <TextArea
                value={this.state.award}
                onChange={this.handleInputChange}
                name="award"
                placeholder="Award (Optional)"
              />
              <FormBtn
                disabled={!(this.state.teacher && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Student
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Students On My List</h1>
            </Jumbotron>
            {this.state.students.length ? (
              <List>
                {this.state.students.map(student => (
                  <ListItem key={student._id}>
                    <Link to={"/students/" + student._id}>
                      <strong>
                        {student.name} by {student.teacher}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteStudent(student._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
      ) : (
        <Redirect
            to='/'
          />
      )
    );
  }
}

export default Students;