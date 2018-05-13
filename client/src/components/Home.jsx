// Packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

// Resources
import './Home.css';

// Components
import Login from './Login';
import Chatroom from './Chatroom';

// Actions
import {
  startSocket,
  loadMessages,
  sendMessage
} from '../actions/actions';

const mapStateToProps = (state = {}) => {
  return {...state};
}

class Home extends Component {
  constructor(props) {
    super(props);
    const {dispatch} = this.props,
          socket = io.connect('http://localhost:3001');
    dispatch(startSocket(socket));
  }

  render() {
    return (
      <div className="home row">
        <div className="col-sm-2 sidebar">
          <Login />
        </div>
        <div className="col-sm-10">
          <Chatroom />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
