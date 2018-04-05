import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nominate from "../../components/Form";
import Card from "../../components/Card";

class Nominated extends Component {
  state = {
    students: [],
    g6Student: "",
    g7Student: "",
    g8Student: "",
    teacher: "",
    characterCounts: ""
  };

  componentDidMount() {
    this.loadStudents();
  }

  loadStudents = () => {
    API.getStudents()
      .then(res =>
        this.setState({ students: res.data, g6Student: "", g7Student: "", g8Student: "", teacher: "", characterCounts: "" })
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
    if (this.state.g6Student || this.state.teacher) {
      API.saveStudent({
        g6Student: this.state.g6Student,
        g7Student: this.state.g7Student,
        g8Student: this.state.g8Student,
        teacher: this.state.teacher,
        characterCounts: this.state.characterCounts
      })
        .then(res => this.loadStudents())
        .catch(err => console.log(err));
    }
  };

  render() {
    let thisMM = new Date().toLocaleString('en-US', { month: 'long' });
    return (
      <Container fluid>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4">{thisMM}</h1>
            <div className="lead">Nominations from all teachers for this month</div>
            <p><em>Please make sure to delete any duplicates</em></p>
          </div>
        </div>

        {this.state.students.length ? (
          <div className="card-div">
            {this.state.students
              .filter(student => new Date(Date.parse(student.date)).toLocaleString('en-US', { month: 'long' }) === thisMM )
              .map(student => (
                <div>
                  <DeleteBtn onClick={() => this.deleteStudent(student._id)} />
              <Card
                g6={student.g6Student}
                g7={student.g7Student}
                g8={student.g8Student}
                cc={student.characterCounts} 
                title={student.teacher}/>
                </div>
            ))}
          </div>
        ) : (
          <h3>No students have been nominated yet!</h3>
        )
}

      </Container>
    );
  }
}

// {
//   this.state.students.length ? (
//     <List>
//       {this.state.students.map(student => (
//         <ListItem key={student._id}>
//           <Link to={"/students/" + student._id}>
//             <strong>
//               {student.g6Student}, {student.g7Student}, {student.g8Student} and {student.characterCounts} by {student.teacher}
//             </strong>
//           </Link>
//           <DeleteBtn onClick={() => this.deleteStudent(student._id)} />
//         </ListItem>
//       ))}
//     </List>
//   ) : (
//     <h3>No Results to Display</h3>
//   )
// }

export default Nominated;
