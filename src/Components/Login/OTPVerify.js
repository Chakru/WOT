import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import './OTPVerify.css';

function OTPVerify() {
  const adminUser = {
    otp: '1234',
  };

  const [otp, setOtp] = useState(new Array(4).fill(''));

  const [isLogin, setIsLogin] = useState(false);

  const Auth = () => setIsLogin(!isLogin);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, ind) => (ind === index ? element.value : d))]);

    //Shift the focus to next field
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const verifyOTP = e => {
    e.preventDefault();

    // fetch('API', {
    //   method: 'POST',
    //   headers: {
    //     Accepted: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(otp),
    // }).then(result => {
    //   result.json().then(resp => {
    //     console.log(resp.success.token);
    //     localStorage.setItem('auth', JSON.stringify(resp.success.token));
    //   });
    // });

    if ((otp.length = 4)) {
      let newOtp = otp.reduce((acc, curr) => {
        return acc + curr;
      });

      if (newOtp) {
        if (newOtp === adminUser.otp) {
          //Existing user
        } else {
          // Proceed to signup
        }
      }
    }
  };

  return (
    <>
      <div className="row otp">
        <div className="col text-center otpContainer">
          <form>
            <label>Enter the OPT sent via SMS</label>
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
            <div className="btnContainer">
              <button onClick={verifyOTP}>Verify OTP</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OTPVerify;
