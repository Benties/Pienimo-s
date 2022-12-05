import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signUp.css'
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [phone_number, setNumber] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, email, phone_number, password));
      // console.log(data)
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Confirmed password must match password'])
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateNumber = (e) => {
    setNumber(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='sign-up-outer-most'>
      <div id='sign-up-outer-container'>
        <img id='join-img-logo'src='https://i.imgur.com/mHyNKq5.png'/>
        <div id='piece-banner'>PIECE OF THE PIE</div>
        <div id='reward-banner'>REWARDS</div>
        {/* <img src='https://i.imgur.com/mHyNKq5.png'/> */}
        <div id='join-text'>JOIN TO START EARNING POINTS TOWARD FREE PIE!</div>
        <form id='sign-up-form'onSubmit={onSignUp}>
          <div className='error-div'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='form-input'>
            <label>
              <span className='sign-up-span'>*</span>
              First Name
            </label>
            <input
              className='sign-up-input'
              type='text'
              name='firstname'
              onChange={updateFirstName}
              value={first_name}
            ></input>
          </div>
          <div className='form-input'>
            <label>
              <span className='sign-up-span'>*</span>
              Last Name
            </label>
            <input
              className='sign-up-input'
              type='text'
              name='lastname'
              onChange={updateLastName}
              value={last_name}
            ></input>
          </div>
          <div className='form-input'>
            <label>
              <span className='sign-up-span'>*</span>
              Email
            </label>
            <input
              className='sign-up-input'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='form-input'>
            <label>
              <span className='sign-up-span'>*</span>
              Phone Number
            </label>
            <input
              className='sign-up-input'
              type='text'
              name='number'
              onChange={updateNumber}
              value={phone_number}
            ></input>
          </div>
          <div className='form-input'>
            <label>
              <span className='sign-up-span'>*</span>
              Password
            </label>
            <input
              className='sign-up-input'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className='form-input'>
            <label>
              <span className='sign-up-span'>*</span>
              Confirm Password
            </label>
            <input
              className='sign-up-input'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              // required={true}
            ></input>
          </div>
          <button id='sign-up-butt'type='submit'>JOIN NOW</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
