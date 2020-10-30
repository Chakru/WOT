import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import OTPVerify from '../Login/OTPVerify';
import Signup from '../Signup/Signup';
function LayoutRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={OTPVerify} />
          <Route path="/register" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default LayoutRouter;
