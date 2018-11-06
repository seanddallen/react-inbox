import React, { Component } from 'react';
import axios from 'axios'
import Toolbar from './Toolbar.js';
import MessageList from './MessageList.js';
import './App.css';

class App extends Component {
  state = {
    messages: [],
    showCompose: false
  }

  componentDidMount = async () => {
    let messages = await axios.get('http://localhost:8082/api/messages')
    this.setState({ messages: messages.data})
    // .then(res => res.json())
    // .then(messages => this.setState({messages}))
  }

  addMessage = async (message) => {

    let newMessage = await axios.post('http://localhost:8082/api/messages/', message)
    console.log('data', newMessage)
    this.setState({
      messages: [...this.state.messages, newMessage.data],
      showCompose: !this.state.showCompose
    })
}

  toggleComposeForm = () => {
    this.setState({
      showCompose: !this.state.showCompose
    })
  }

  toggleRead = (selectedMessage) => {
    let otherMessages = this.state.messages.filter(message => selectedMessage.id != message.id)
    let changedMessage = {
      id: selectedMessage.id,
      subject: selectedMessage.subject,
      read: !selectedMessage.read,
      starred: selectedMessage.starred,
      labels: selectedMessage.labels
    }
    this.setState({messages: otherMessages.concat(changedMessage).sort((a, b) => a.id-b.id) })
  }

  toggleStarred = (selectedMessage) => {
    let otherMessages = this.state.messages.filter(message => selectedMessage.id != message.id)
    let changedMessage = {
      id: selectedMessage.id,
      subject: selectedMessage.subject,
      read: selectedMessage.read,
      starred: !selectedMessage.starred,
      labels: selectedMessage.labels
    }
    this.setState({messages: otherMessages.concat(changedMessage).sort((a, b) => a.id-b.id) })
  }

  toggleSelected = (selectedMessage) => {
    let otherMessages = this.state.messages.filter(message => selectedMessage.id != message.id)
    let changedMessage = {
      id: selectedMessage.id,
      subject: selectedMessage.subject,
      read: selectedMessage.read,
      starred: selectedMessage.starred,
      labels: selectedMessage.labels,
      selected: !selectedMessage.selected || false
    }
    this.setState({messages: otherMessages.concat(changedMessage).sort((a, b) => a.id-b.id) })
  }

  toolbarCopyCurrentState(){
    return [...this.state.messages]
  }

  selectButtonFunc = (type) => {

    let messagesStateCopy = this.toolbarCopyCurrentState();

    if(type.includes('check')){
      messagesStateCopy = this.state.messages.map(message => {
          message.selected = false
          return message
        })
      } else{
      messagesStateCopy = this.state.messages.map(message => {
          message.selected = true
          return message
      })
    }
    this.setState({messages: messagesStateCopy});
  }

  setUnreadFunc = () => {
    let newState = this.state.messages.map(message => {
      if(message.selected){
        message.read = false
      }
      return message
    })
    this.setState({ messages: newState })
  }

  setReadFunc = () => {
    let newState = this.state.messages.map(message => {
      if(message.selected){
        message.read = true
      }
      return message
    })

    this.setState({ messages: newState })
  }

  deleteMessages = () => {
    let newState = this.state.messages.filter(message => !message.selected)
    this.setState({ messages: newState })
  }

  addLabel = (label) => {
    let newState = this.state.messages.map(message => {
      if(message.selected && !message.labels.includes(label)){
        message.labels.push(label)
      }
      return message
    })
    this.setState({ messages: newState })
  }

  removeLabel = (label) => {
    let newState = this.state.messages.map(message => {
      if(message.selected){
        message.labels = message.labels.filter(l => l !== label)
      }
      return message
      // if(message.selected && message.labels.includes(label)){
      //   message.labels.push(label)
      //   return message
      // }
    })
    this.setState({ messages: newState })
  }

  render() {
    let numOfSelectedMessages = this.state.messages.filter(message => message.selected).length;
    console.log('numOfSelectedMessages', numOfSelectedMessages)
    console.log('message', this.state.messages)

    return (
      <div className="container">
        <header>

        </header>
        <main>
          <Toolbar
            messages={this.state.messages}
            numOfSelectedMessages={numOfSelectedMessages}
            selectButtonFunc={this.selectButtonFunc}
            setUnreadFunc={this.setUnreadFunc}
            setReadFunc={this.setReadFunc}
            deleteMessages={this.deleteMessages}
            addLabel={this.addLabel}
            removeLabel={this.removeLabel}
            toggleComposeForm={this.toggleComposeForm}
            showCompose={this.state.showCompose}
            addMessage={this.addMessage}
          />
          <MessageList
            messages={this.state.messages}
            toggleRead={this.toggleRead}
            toggleStarred={this.toggleStarred}
            toggleSelected={this.toggleSelected}
            selectButtonFunc={this.selectButtonFunc}
          />
        </main>
      </div>
    );
  }
}

export default App;
