import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/modal';
import PieForm from './pieForm';

function PieFormModal({pie, cart=false, setShowCartModal }) {
  const [showModal, setShowModal] = useState(false);

  const showCart = () => {
    document.removeEventListener('click', setShowCartModal)
    setShowModal(true)
  }


  return (
    <div>
      <button id={cart? 'edit-item': 'customize'} onClick={(e) => (showCart(), e.preventDefault())}>{cart === true? 'edit' : 'customize'}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PieForm setShowModal={setShowModal} setShowCartModal={setShowCartModal} pie={pie} cart={cart}/>
        </Modal>
      )}
    </div>
  );
}

export default PieFormModal;
