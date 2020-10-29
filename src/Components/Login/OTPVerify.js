import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './OTPVerify.css';

function OTPVerify() {
  const adminUser = {
    otp: '1234',
  };

  const [otp, setOtp] = useState(new Array(4).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, ind) => (ind === index ? element.value : d))]);

    //Shift the focus to next field
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let newOtp;
    if ((otp.length = 4)) {
      newOtp = otp.reduce((acc, curr) => {
        return acc + curr;
      });
    }
    if (newOtp === adminUser.otp) {
      console.log('Loged In');
      <Link to="/"></Link>;
    } else {
      <Link to="/login"></Link>;
      console.log('UnAuth');
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
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
            <div className="btnContainer">
              <button onClick={handleSubmit}>Verify OTP</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OTPVerify;
