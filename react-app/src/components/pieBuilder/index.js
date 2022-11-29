import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import PieForm from './pieForm';

function PieFormModal({pie}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      <button id="customize" onClick={() => {setShowModal(true)}}>Customize</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PieForm setShowModal={setShowModal} pie={pie}/>
        </Modal>
      )}
    </div>
  );
}

export default PieFormModal;
