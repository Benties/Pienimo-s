import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import PieForm from './pieForm';

function PieFormModal({pie, cart=false, setShowCartModal }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button id={cart? 'edit-item': 'customize'} onClick={(e) => (e.preventDefault(), setShowModal(true))}>{cart === true? 'edit' : 'customize'}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PieForm setShowModal={setShowModal} setShowCartModal={setShowCartModal} pie={pie} cart={cart}/>
        </Modal>
      )}
    </div>
  );
}

export default PieFormModal;
