import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Login.css';

function Login() {
  const [user, setUser] = useState({ phoneNumber: '' });

  const changeHandler = e => {
    setUser({ ...user, phoneNumber: e.target.value });
  };

  const submitHandler = () => {
    // use the API from Basis to send the otp to user.phoneNumber
    Axios.post('https://hiring.getbasis.co/candidate/users/phone', user)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <h2 className="heading">Women of Today</h2>
          <form onSubmit={submitHandler}>
            <p>Please enter your mobile number to get started</p>
            <input
              name="phoneNumber"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              type="tel"
              minLength="10"
              maxLength="10"
              value={user.phoneNumber}
              onChange={changeHandler}
              required
            />
            <div className="btnContainer">
              <Link to="/login">
                <button
                  disabled={user.phoneNumber.length < 10}
                  className={
                    user.phoneNumber.length < 10 ? 'btnDisabled' : 'button'
                  }
                >
                  Get OTP
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
