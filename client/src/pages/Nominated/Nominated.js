import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Students extends Component {
  state = {
    students: [],
    name: "",
    teacher: "",
    award: ""
  };

  componentDidMount() {
    this.loadStudents();
  }

  loadStudents = () => {
    API.getStudents()
      .then(res =>
        this.setState({ students: res.data, name: "", teacher: "", award: "" })
      )
      .catch(err => console.log(err));
  };

  deleteStudent = id => {
    API.deleteStudent(id)
      .then(res => this.loadStudents())
      .catch(err => console.log(err));
  };

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
        award: this.state.award
      })
        .then(res => this.loadStudents())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1 class="text-center">Students On My List</h1>
            </Jumbotron>
            </Col>
            </Row>
        <div class="row align-self-center">
              <Col size="md-6 sm-12" >
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
        </div>
      </Container>
    );
  }
}

export default Students;
