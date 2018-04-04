import React, { Component } from 'react'
import Message from "./Message"
import './Chat.css'

class MessageList extends Component {

    componentDidUpdate = () => {
        this.node.scrollTop = this.node.scrollHeight
    }

    //call chat history

    componentDidMount() {
        console.log("did load")
        //this.loadChat();
    }

    render() {
        return (
            <div className="MessageList" ref={(node) => (this.node = node)}>
                <p>
                    {this.props.body}
                </p>
                {this.props.messages.map((message, i) => (
                    <Message key={i} {...message} />
                ))}
            </div>
        )
    }
}
export default MessageList
