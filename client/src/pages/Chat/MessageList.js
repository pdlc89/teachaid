import React, { Component } from 'react'
import Message from "./Message"
import './Chat.css'

class MessageList extends Component {
    render() {
        return (
            <div className="MessageList">
                <div>Connecting...</div>
                {this.props.messeges.map((message, i) => (
                    <Message key={i}{...message} />
                    ))}
            </div>
        )
    }
}

export default MessageList
