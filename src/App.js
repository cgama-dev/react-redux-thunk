import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux'
import reducer from './redurces/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Info from './Info'
import UserAgent from './UserAgent'

let store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
          <UserAgent/>
        </div>
      </Provider>
    );
  }
}

export default App;
