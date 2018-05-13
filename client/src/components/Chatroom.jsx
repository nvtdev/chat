import React, { Component } from 'react';
import './Chatroom.css';

class Chatroom extends Component {
  render() {
    return (
      <div>
        <input type="text" className="form-control message-box" />
      </div>
    )
  }
}

export default Chatroom;
