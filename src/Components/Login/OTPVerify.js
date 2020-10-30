import React, { useState } from 'react';
import Axios from 'axios';
import './OTPVerify.css';

function OTPVerify() {
  const adminUser = {
    otp: '1111',
  };

  let userOtp;

  const [otp, setOtp] = useState(new Array(4).fill(''));

  const [isLogin, setIsLogin] = useState(false);

  const Auth = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, ind) => (ind === index ? element.value : d))]);

    //Shift the focus to next field
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const verifyOTP = () => {
    if ((otp.length = 4)) {
      userOtp = otp.reduce((acc, curr) => {
        return acc + curr;
      });
    }
    // use the API from Basis to verify the OTP
    Axios.post(
      'https://hiring.getbasis.co/candidate/users/phone/verify',
      userOtp
    )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
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
