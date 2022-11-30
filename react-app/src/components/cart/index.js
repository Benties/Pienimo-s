import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import CartForm from './cartForm';
import './cart.css'

function CartFormModal() {
  const [showModal, setShowModal] = useState(false);
  const cart = useSelector(state => Object.values(state.cart.cart))
  const cartMenu = useRef(null)
  // const addCart = document.querySelectorAll(".add-cart")
  // const cartButt = document.getElementById('cart-butt')

  const closeMenu = (e)=>{
    if(cartMenu.current && showModal && !cartMenu.current.contains(e.target)){
      setShowModal(false)
    }
  }

  useEffect(() => {
     document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showModal]);

  return (
    <div ref={cartMenu} className="cart-modal-container">
      <button id="cart-butt" onClick={() => {setShowModal(!showModal)}}>🛒</button>
      <div id='cart-count'>{cart.length}</div>
      <div id='card-text'>CART</div>

      {showModal &&
          <CartForm setShowModal={setShowModal}/>
      }
    </div>
  );
}

export default CartFormModal;
