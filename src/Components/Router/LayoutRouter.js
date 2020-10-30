import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import OTPVerify from '../Login/OTPVerify';
import Profile from '../Profile/Profile';
import Signup from '../Signup/Signup';
function LayoutRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={OTPVerify} />
          <Route path="/register" component={Signup} />
          <Route path="/user" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default LayoutRouter;
