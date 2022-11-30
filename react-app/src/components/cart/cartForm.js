import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addToCartThunk, removeFromCartThunk } from "../../store/cart"
import { createPieThunk } from "../../store/pie"
import PieFormModal from "../pieBuilder"
import './cart.css'
const CartForm = ({setShowModal}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => Object.values(state.cart.cart))
    const [amt, setAmt] = useState(0)
    const showSize = (size) => {
        if (size === 'x-large') return 'X-Large (16") '
        if (size === 'large') return 'Large (14") '
        if (size === 'medium') return 'Medium (12") '
        return 'Small (10")'
    }

    const showStyle = (style) => {
        if (style === 'hand') return 'Hand Tossed '
        if (style === 'thin') return 'Thin '
        if (style === 'brooklyn') return 'Brooklyn '
    }

    const removeItem = (item) => {
        // e.preventDefault()
        dispatch(removeFromCartThunk(item))
    }
    const checkout = async () => {
       await cart.forEach(item => dispatch(createPieThunk(item)))
       localStorage.removeItem('cart')
       setShowModal(false)
    }

    const changeAmt = (item, e) => {
        item.quantity = Number(e.target.value)
        dispatch(addToCartThunk(item))
    }
    return (
        // <div className="cart-container">
            <form className="cart-container" onSubmit={checkout}>
                <div className="triang"></div>
                <div className="cart-header">
                    <p>your cart</p>
                    <button onClick={()=> setShowModal(false)}>X</button>
                </div>
                {cart.map(item =>
                    <div className="cart-item-container">
                        {showSize(item.size)}
                        {showStyle(item.style)}
                        {item.name? item.name : ' Pizza'}
                        <select value={item.quantity} onChange={(e) => changeAmt(item, e)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            {/* <option value={3}>3</option> */}
                        </select>
                        <PieFormModal pie={item} cart={true}/>
                        <button onClick={(e) => (e.preventDefault(), removeItem(item))}>Remove</button>
                    </div>
                )}
                <div className="cart-bottom">
                    <div>Subtotal: ${cart.reduce((accum, val)=> accum + val.price,0)}</div>
                    {cart.length ? <button type='submit'>CHECKOUT</button> : null}
                </div>
            </form>
        // </div>
    )
}


export default CartForm
