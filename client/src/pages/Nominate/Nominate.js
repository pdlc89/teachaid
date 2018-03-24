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
                    
                </Row>
            </Container>
        );
    }
}

export default Students;
