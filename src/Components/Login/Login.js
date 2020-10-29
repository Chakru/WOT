import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import OTPVerify from './OTPVerify';

function Login() {
  const [user, setUser] = useState({ phoneNumber: '' });

  const loginHandler = e => {
    e.preventDefault();
    console.log(user.phoneNumber);
  };

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          {/* <h2 className="heading">Women of Today</h2> */}
          <form onSubmit={loginHandler}>
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              placeholder="Phone #"
              pattern="[0-9]{5}-[0-9]{5}"
              type="tel"
              minLength="10"
              maxLength="10"
              value={user.phoneNumber}
              onChange={e => setUser({ ...user, phoneNumber: e.target.value })}
              required="'required'"
            />
            {/* error != '' ? <div className="errorMsg">{error}</div> : '' */}
            <div className="btnContainer">
              <Link to="/login">
                <button disabled={user.phoneNumber.length < 10}>Get OTP</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
