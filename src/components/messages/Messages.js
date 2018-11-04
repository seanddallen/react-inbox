import React, { Component } from 'react';
// import Message-expanded from './components/messages/Message-expanded.js';
// import Message-read from './components/messages/Message-read.js';
import MessageSelected from './components/messages/Message-selected.js';
// import Message-starred from './components/messages/Message-starred.js';
// import Message-unread from './components/messages/Message-unread.js';
// import Message-with-labels from './components/messages/Message-with-labels.js';
import './App.css';

class Messages extends Component {
  state = {

  }

  render() {

    let allMessages = this.props.messages.map(message => <MessageSelected message={message}/>)

    return (
      <React.Fragment>
        {/* <MessageSelected /> */}
        {allMessages}
      </React.Fragment>
    );
  }
}

export default Messages;
