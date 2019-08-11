import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App';
import store from './Common/store/store'
import NavigationBar from './NavigationBar/components/NavigationBar'
import NotFound from './NotFound/components/NotFound'
import PublicLeagues from './PublicLeagues/components/PublicLeagues'
import League from './League/components/League'
import Dashboard from './Dashboard/components/Dashboard'
import { PrivateRoute } from './Common/components/PrivateRoute'
import Login from './Login/components/Login'

const routing = (
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={ App } />
            <Route exact path='/public-leagues' component={ PublicLeagues } />
            <Route exact path='/leagues/:id' component={ League } />
            <Route exact path='/login' component={ Login } />
            <PrivateRoute exact path="/dashboard" component={ Dashboard } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));
