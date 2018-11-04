import React, { Component } from 'react';
import Message from './Message'
import './App.css';

class MessageList extends Component {

  render() {

    let allMessages = this.props.messages.map(message => {
      return(
        <Message
          key={message.id}
          message={message}
          toggleRead={this.props.toggleRead}
          toggleStarred={this.props.toggleStarred}
          toggleSelected={this.props.toggleSelected}
        />
      )
    })

    return (
      <div>
        {allMessages}
      </div>
    );
  }
}

export default MessageList;
