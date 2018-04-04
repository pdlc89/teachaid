// JavaScript source code
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import MessageList from './MessageList'
import MessageForm from "./MessageForm"
import "./Chat.css"

let text = "Bonsoir Monde";
class Chat extends Component {
    state = {
        chat: {
            name: "me",
            message: "Hello World"
        }
    };
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            messages: []
        }
    } 
    handleNewMessage = (text) => {
        this.setState({
           messages: [...this.state.messages, { me: true, author: "Me", body: text }],
        })
        console.log(text)
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
                                <MessageForm onMessageSend={this.handleNewMessage} />
                                
                            </div>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/"> Back to home</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Chat;
