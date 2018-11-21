import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import AdvsListContainer from './components/AdvsListContainer';
import Testing from './components/Testing';
import AdvDetailsContainer from './components/AdvDetailsContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Testing} />
          <Route path="/advertisements" exact component={AdvsListContainer} />
          <Route path="/advertisements/:id" component={AdvDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
