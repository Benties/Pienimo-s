import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './logged.css'

const LogoutButton = ({user}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button id='logout-butt' onClick={onLogout}>
          <div>Hi, {user.first_name}.</div>
          <div>Not {user.first_name}? </div>
          <div>SIGN OUT</div>
          </button>;
};

export default LogoutButton;
