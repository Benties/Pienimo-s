import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import LoginForm from './LoginForm';
import './logged.css'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button id="login" onClick={() => {setShowModal(true)}}>SIGN IN & EARN REWARDS</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;
