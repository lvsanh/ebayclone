import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import AdvsListContainer from './components/AdvsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdvsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;