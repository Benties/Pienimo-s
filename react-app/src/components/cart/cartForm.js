import { useSelector } from "react-redux"
import PieFormModal from "../pieBuilder"
import './cart.css'
const CartForm = () => {
    const cart = useSelector(state => state.cart.cart)

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

    return (
        <div className="cart-container">
            {cart.map(item =>
                <div className="cart-item-container">
                    {showSize(item.size)}
                    {showStyle(item.style)}
                    {item.name? item.name : ' Pizza'}
                    <button>Quantity</button>
                    <PieFormModal pie={item} cart={true}/>
                    <button>Remove</button>
                </div>

            )}
        </div>
    )
}


export default CartForm
