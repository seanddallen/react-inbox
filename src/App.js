import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import MessageList from './MessageList.js';
import './App.css';

class App extends Component {
  state = {
    messages: []
  }

  componentDidMount(){
    fetch('http://localhost:8082/api/messages')
    .then(res => res.json())
    .then(messages => this.setState({messages}))
  }

  render() {
    return (
      <body className="container">
        <header>

        </header>
        <main>
          <Toolbar />
          <MessageList messages={this.state.messages} />
        </main>
      </body>
    );
  }
}

export default App;
