import React, {Component} from 'react'

class Toolbar extends Component {
  state = {
    subject: '',
    body: '',
    labels: JSON.stringify([]),
    read: false,
    selected: false,
    starred: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMessage(this.state)
    console.log(this.state)
  }

  render(){

    let selectButtonClass = 'fa-square-o';
    let messagesSelected = this.props.messages.filter(message => message.selected);

    if (messagesSelected.length === this.props.messages.length){
      selectButtonClass = 'fa-check-square-o'
    } else if (messagesSelected[0]){
      selectButtonClass = 'fa-minus-square-o'
    }

    // let someSelected = this.props.numOfSelectedMessages > 0 && this.props.numOfSelectedMessages < this.props.messages.length ? '-minus' : null;
    // let allSelected = this.props.numOfSelectedMessages == this.props.messages.length ? '-check' : null;
    // let noneSelected = this.props.numOfSelectedMessages == 0 ? '' : null;

    let countedUnread = this.props.messages.filter(message => !message.read).length;

    let countedSelected = this.props.messages.reduce((acc, val) => {
      return acc + !!val.selected
    }, 0)


    return (
      <div>
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">{countedUnread}</span>
              {countedUnread > 1 || countedUnread < 1 ? 'unread messages' : 'unread message'}
            </p>

            <button className="btn btn-danger" onClick={() => this.props.toggleComposeForm()}>
              <i className="fa fa-plus"></i>
            </button>

            <button className="btn btn-default" onClick={() => this.props.selectButtonFunc(selectButtonClass)}>
              <i className={`fa ${selectButtonClass}`}></i>
            </button>

            <button className="btn btn-default" disabled={!countedSelected} onClick={()=>this.props.setReadFunc()}>Mark As Read</button>

            <button className="btn btn-default" disabled={!countedSelected} onClick={()=>this.props.setUnreadFunc()}>Mark As Unread</button>

            <select className="form-control label-select" disabled={!countedSelected} onChange={(e) => this.props.addLabel(e.target.value)}>
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select" disabled={!countedSelected} onChange={(e) => this.props.removeLabel(e.target.value)}>
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default" disabled={!countedSelected} onClick={() => this.props.deleteMessages()}>
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
        { this.props.showCompose ?
          <form className="form-horizontal well">
            <div className="form-group">
              <div className="col-sm-8 col-sm-offset-2">
                <h4>Compose Message</h4>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter a subject" name="subject" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="body" className="col-sm-2 control-label">Body</label>
              <div className="col-sm-8">
                <textarea name="body" id="body" className="form-control" value={this.state.body} onChange={(e) => this.setState({ body: e.target.value})}></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-8 col-sm-offset-2">
                <button type="submit" value="Send" className="btn btn-primary" onClick={this.handleSubmit}>
                  Send
                </button>
              </div>
            </div>
          </form>
        : null
        }
      </div>
    )
  }
}

export default Toolbar;
