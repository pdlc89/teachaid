import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MessageForm.css'
import API from "../../utils/API";

class MessageForm extends Component {
    static propTypes = {
        onMessageSend: PropTypes.func.isRequired,
    }

    componentDidMount = () => {
        this.input.focus()
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onMessageSend(this.input.value)
        this.input.value = ""
        /*if (this.state.name && this.state.teacher) {
            API.saveChat({
                name: this.state.name,
                teacher: this.state.teacher,
                award: this.state.award,
                notes: this.state.notes
            })
                .then(res => this.loadStudents())
                .catch(err => console.log(err));
        }*/
    }

    render() {
        return (
            <form className="MessageForm" onSubmit={this.handleFormSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        ref={(node) => (this.input = node)}
                        placeholder="Enter your message here."
                    />
                </div>
                <div className="button-container">
                    <button type="submit">
                        Send
          </button>
                </div>
            </form>
        )
    }
}

export default MessageForm
