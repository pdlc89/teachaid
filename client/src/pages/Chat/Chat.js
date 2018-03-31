// JavaScript source code
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

import MessageList from './MessageList'
import "./Chat.css"

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
        }
    } 
    state = {
        student: {}
    };
    // When this component mounts, grab the student with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getStudent(this.props.match.params.id)
            .then(res => this.setState({ student: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                               "Random Teacher"
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>"TEACHERS NAME GOES HERE"</h1>
                            <div className="Test">
                                <MessageList messages={this.state.messages} />
                            </div>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/">← Back to Teachers</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Chat;
