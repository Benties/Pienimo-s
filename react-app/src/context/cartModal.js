import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './cartModal.css';

const CartModalContext = React.createContext();

export function CartModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <CartModalContext.Provider value={value}>
        {children}
      </CartModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function CartModal({ onClose, children }) {
  const modalNode = useContext(CartModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="cart-modal">
      <div id="cart-modal-background" onClick={onClose} />
      <div id="cart-modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}
