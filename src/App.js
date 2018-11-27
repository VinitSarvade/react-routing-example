import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Home from './components/home';
import NewPage from './components/new-page';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/new' component={NewPage} />
          <Route path='' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
