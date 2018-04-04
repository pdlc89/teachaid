import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Monthly from "./award.json";

//this will display the award depending on the month
let holder = new Date();
let elm1 = holder.getMonth();
let elm2 = Object.entries(Monthly)[elm1];
let month = elm2[1];
//console.log(month);

class Students extends Component {
<<<<<<< HEAD
  state = {
    students: [],
    name: "",
    teacher: "",
    award: "Citizenship",
    notes: ""
  };
  componentDidMount() {
    this.loadStudents();
  }

  loadStudents = () => {
    API.getStudents()
      .then(res =>
        this.setState({ students: res.data, name: "", teacher: "", award: month, notes: "" })
      )
      .catch(err => console.log(err));
  };
=======
    state = {
        students: [],
        name: "",
        teacher: "",
        award: "Citizenship",
        notes: ""
    };
    componentDidMount() {
        this.loadStudents();
    }

    loadStudents = () => {
        API.getStudents()
            .then(res =>
                this.setState({ students: res.data, name: "", teacher: "", award: month, notes: "" })
            )
            .catch(err => console.log(err));
    };

    deleteStudent = id => {
        API.deleteStudent(id)
            .then(res => this.loadStudents())
            .catch(err => console.log(err));
    };

    handleChange = event => {
        this.setState({ award: event.target.value });
    }
>>>>>>> 8b4c766e13ea7730d2b75d06088e0e511572865c

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

<<<<<<< HEAD
  handleChange = event => {
      this.setState({ award: event.target.value });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.teacher) {
      API.saveStudent({
        name: this.state.name,
        teacher: this.state.teacher,
        award: this.state.award,
        notes: this.state.notes
      })
        .then(res => this.loadStudents())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
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
              <select onChange={this.handleChange}>
                <option
                value={this.state.award}
                  name="Award">"Student of the Month"
                </option>
                <option value="Citizenship"
                           name="Award">Citizenship
                </option>
              </select>
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="notes (Optional)"
              />
              <FormBtn
                disabled={!(this.state.teacher && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Student
=======
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.teacher) {
            API.saveStudent({
                name: this.state.name,
                teacher: this.state.teacher,
                award: this.state.award,
                notes: this.state.notes
            })
                .then(res => this.loadStudents())
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
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
                            <select onChange={this.handleChange}>
                                <option
                                    value={this.state.award}
                                    name="Award">"Student of the Month"
                </option>
                                <option value="Citizenship"
                                    name="Award">Citizenship
                </option>
                            </select>
                            <TextArea
                                value={this.state.notes}
                                onChange={this.handleInputChange}
                                name="notes"
                                placeholder="notes (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.teacher && this.state.name)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Student
>>>>>>> 8b4c766e13ea7730d2b75d06088e0e511572865c
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
        );
    }
}

export default Students;