import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App';
import store from './Common/store/store'
import NavigationBar from './NavigationBar/components/NavigationBar'
import NotFound from './NotFound/components/NotFound'
import PublicLeagues from './PublicLeagues/components/PublicLeagues'

const routing = (
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={ App } />
            <Route exact path='/public-leagues' component={ PublicLeagues } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));
