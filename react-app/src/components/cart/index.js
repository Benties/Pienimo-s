import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CartForm from './cartForm';

function CartFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <button id="cart" onClick={() => {setShowModal(true)}}>Cart</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CartForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </div>
  );
}

export default CartFormModal;
