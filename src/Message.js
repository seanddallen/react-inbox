import React, {Component} from 'react'

const Message = ({message, toggleRead, toggleStarred, toggleSelected}) => {

  let labelList = message.labels.map((label, index) => <span key={index} className="label label-warning">{label}</span>)

  return (
    <div className={`row message ${message.read ? 'read' : 'unread'} ${message.selected ? 'selected' : null}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" checked={message.selected} onChange={(e) => toggleSelected(message)}/>
          </div>
          <div className="col-xs-2">
            <i className={`star fa fa-star${message.starred ? '' : '-o'}`} onClick={(e) => toggleStarred(message)}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11" onClick={(e) => toggleRead(message)}>
        {labelList}
        <a href="#">
          {message.subject}
        </a>
      </div>
    </div>
  )
}

export default Message;
