import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [user, setUser] = useState({ phoneNumber: '' });

  const loginHandler = e => {
    e.preventDefault();
  };

  let userNumber = {
    phoneNumber: user.phoneNumber,
  };

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <h2 className="heading">Women of Today</h2>
          <form onClick={loginHandler}>
            <p>Please enter your mobile number to get started</p>
            <input
              name="phoneNumber"
              placeholder="Mobile Number"
              pattern="[6-9]{3}-[0-9]{3}-[0-9]{4}"
              type="tel"
              minLength="10"
              maxLength="10"
              value={user.phoneNumber}
              onChange={e => setUser({ ...user, phoneNumber: e.target.value })}
              required
            />
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
