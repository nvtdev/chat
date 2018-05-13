// Packages
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Resources
import './App.css';

// Store
import store from './store';

// Components
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
