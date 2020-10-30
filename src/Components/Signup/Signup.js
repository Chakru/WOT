import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [referalCode, setReferalCode] = useState('');

  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    referalCode: referalCode,
  };

  const submitHandler = () => {
    if (userData) {
      console.log(userData);
    }
    <Link to="/" />;
    // use the API from Basis to post new user
    // Axios.post('apiURL', userData)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <div className="signup">
        <div className="signupContainer">
          <form onSubmit={submitHandler}>
            <p>Let's register here</p>
            <input
              name="fName"
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <input
              name="lName"
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              name="referalCode"
              placeholder="Referal Code"
              type="text"
              value={referalCode}
              onChange={e => setReferalCode(e.target.value)}
              required
            />
            <div className="btnContainer">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
