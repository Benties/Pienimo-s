import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login, signUp } from '../../store/session';

const LoginForm = ({setShowModal}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const demoLog = () => {
    setEmail('demo@aa.io')
    setPassword('password')
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    // return <Redirect to='/' />;
    setShowModal(false)
  }
  const signUp = () => {
    setShowModal(false)
    history.push('/sign-up')
  }
  return (
    <div id='sign-in-container'>
      <div id='sign-in-header'>SIGN IN TO YOUR PIE PROFILE</div>
      <div id='sign-in-top'>
        <img id='sign-in-logo' src='https://i.imgur.com/mHyNKq5.png'/>
        Earn free pizza, get exclusice deals, and check out faster!
      </div>
      <button onClick={() => signUp()} id='join-butt'>JOIN NOW</button>
      <form onSubmit={onLogin} id='sign-in-form'>
        <div className='error-div'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label className='sign-in-label' htmlFor='email'>Email</label>
          <input
            id='sign-in-input'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label className='sign-in-label' htmlFor='password'>Password</label>
          <input
            id='sign-in-input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button id='login-butt' type='submit'>SIGN IN FOR THIS ORDER</button>
          <button id='demo-log-in' type='submit' onClick={()=> demoLog()}>DEMO SIGN IN</button>
        </div>
      </form>

    </div>
  );
};

export default LoginForm;
