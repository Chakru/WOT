import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import OTPVerify from '../Login/OTPVerify';

function LayoutRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={OTPVerify} />
        </Switch>
      </Router>
    </div>
  );
}

export default LayoutRouter;
