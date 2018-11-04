import React, {Component} from 'react'

const Message-read = (props) => {

  return(
    <React.Fragment>
      <div class="row message read">
        <div class="col-xs-1">
          <div class="row">
            <div class="col-xs-2">
              <input type="checkbox" />
            </div>
            <div class="col-xs-2">
              <i class="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div class="col-xs-11">
          <a href="#">
            Here is some message text that has a bunch of stuff
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Message-read;
