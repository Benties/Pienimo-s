// constants
const ADD_TO_CART = 'cart/ADD_TO_CART'






// action creators

const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})




//thunks

export const addToCartThunk = (payload) => async dispatch => {
    const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []

    let tempId = cart.length ? cart[cart.length-1].tempId + 1 : 0
    // const duplicates = cart.filter(item => item.id === payload.id)

   const itemsToAdd = {
            ...payload,
            tempId: tempId++
        }

        cart[itemsToAdd.tempId] = (itemsToAdd)

        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(tempId)
        dispatch(addToCart(cart))

}

// export const editFromCartThunk = (payload) => async dispatch => {
//     const cart = localStorage.getItem('cart') ?
//         JSON.parse(localStorage.getItem('cart')) : []


// }







//reducers
let INIITAL_STATE = {
    cart: []
}
if (localStorage.getItem('cart')) {
    let cartStorage = JSON.parse(localStorage.getItem('cart'))
    console.log(cartStorage)
    for (const item in cartStorage){
        INIITAL_STATE.cart[cartStorage[item].tempId] = {...cartStorage[item]}
    }
} else {
    INIITAL_STATE.cart = []
}

export default function cartReducer(state=INIITAL_STATE, action){
    switch (action.type) {
        case ADD_TO_CART:
            const newState = {...state}
            for (const item in action.payload) {
                if (!newState.cart[action.payload[item].tempId]){
                    newState.cart[action.payload[item].tempId] = action.payload[item]
                    }
                }
                return newState

            default:
                return state
            }
        }

        // ...state,
        // [action.payload.tempId]: {
        //     ...state[action.payload.tempId],
        //     ...action.payload
        // }
