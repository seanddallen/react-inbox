import React, { Component } from 'react';
import AllMessagesSelected from './components/toolbar/All-messages-selected.js';
// import No-messages-selected from './components/toolbar/No-messages-selected.js';
// import Some-messages-selected from './components/toolbar/Some-messages-selected.js';
// import Unread-message-count from './components/toolbar/Unread-message-count.js';
import ComposeButton from './components/toolbar/Compose-button.js';
// import Compose-form from './components/toolbar/Compose-form.js';
import './App.css';

class Toolbar extends Component {
  render() {
    return (
      <div>
        <ComposeButton />
      </div>
    );
  }
}

export default Toolbar;
