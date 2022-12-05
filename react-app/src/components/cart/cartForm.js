import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addToCartThunk, emptyCartThunk, removeFromCartThunk } from "../../store/cart"
import { createPieThunk } from "../../store/pie"
import PieFormModal from "../pieBuilder"
import './cart.css'
const CartForm = ({setShowCartModal}) => {
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
        dispatch(removeFromCartThunk(item))
        // window.alert(`succesfully deleted ${item.name}`)
    }
    const checkout = async () => {
       await cart.forEach(item => dispatch(createPieThunk(item)))
       localStorage.removeItem('cart')
       dispatch(emptyCartThunk(cart))
       setShowCartModal(false)
       window.alert(`Your pies are on the way!`)

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
                    <button onClick={()=> setShowCartModal(false)}>X</button>
                </div>
                <div id='cart-body'>
                    {cart?.map(item =>
                        <div className="cart-item-container">
                            <div className="cart-info">
                                <img src={item.pie_img} className='cart-img'/>
                                <div className="cart-pie-text">
                                    {showSize(item.size)}
                                    {showStyle(item.style)}
                                    {item.name? item.name : ' Pizza'}
                                </div>
                                <div className="cart-pie-price">
                                    ${item.price = Math.round(100*(item.quantity) * 17.99)/100}
                                </div>
                            </div>
                            <div className="lower-body">
                                Quantity:
                                <select value={item.quantity} onChange={(e) => changeAmt(item, e)}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                                <div className="lower-bot">
                                    <PieFormModal pie={item} cart={true} setShowCartModal={setShowCartModal}/>
                                    <button onClick={(e) => (e.stopPropagation(), e.preventDefault(), removeItem(item))}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="cart-bottom">
                    <div>Subtotal: ${Math.round(100*cart.reduce((accum, val)=> accum + val.price,0))/100}</div>
                    {cart.length ? <button type='submit'>CHECKOUT</button> : null}
                </div>
            </form>
        // </div>
    )
}


export default CartForm
