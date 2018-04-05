import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import Nominate from '../../components/Form/Nominate'
import Card from "../../components/Card";


class History extends Component {
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


  render() {
    console.log("REnder", this.state.students[0]);
    return (
      <div className="card-div">
        
        {/* filter out only me to see my entire */}
        {this.state.students.filter(student => student.teacher.toLowerCase() === "ly").map(student => (
          <Card
            g6={student.g6Student}
            g7={student.g7Student}
            g8={student.g8Student}
            cc={student.characterCounts} 
            date={new Date(Date.parse(student.date)).toLocaleString('en-US', {month: 'long'})}/>
          
          // <ListItem key={student._id}>
          //   <Link to={"/students/" + student._id}>
          //     <strong>
          //       {student.g6Student}, {student.g7Student}, {student.g8Student} and {student.characterCounts} by {student.teacher}
          //     </strong>
          //   </Link>
          //   <DeleteBtn onClick={() => this.deleteStudent(student._id)} />
          // </ListItem>
        ))}
        </div>
    )
  }
}

export default History;
