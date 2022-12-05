

// constants
const ADD_TO_CART = 'cart/ADD_TO_CART'

const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'

const EMPTY_CART = 'cart/EMPTY_CART'



// action creators

const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

const removeFromCart = (payload => ({
    type: REMOVE_FROM_CART,
    payload
}))

const emptyCart = (payload => ({
    type: EMPTY_CART,
    payload
}))


//thunks

export const addToCartThunk = (payload) => async dispatch => {

    const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []

    let tempId = cart.length > 0 ? cart[cart.length-1].tempId + 1 : 0
    // const duplicates = cart.filter(item => item.id === payload.id)
    let itemsToAdd;

    if (!payload?.tempId){
        itemsToAdd = {
            ...payload,
            tempId: tempId++
        }
    }
    for (const item in cart) {
        if (cart[item]?.tempId === payload?.tempId){
            itemsToAdd = {...payload}
        }
    }

        cart[itemsToAdd?.tempId] = (itemsToAdd)

        localStorage.setItem('cart', JSON.stringify(cart))

        dispatch(addToCart(cart))

}

export const removeFromCartThunk = (payload) => async dispatch => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    // const newCart = cart.filter(item=> item.tempId !== payload.tempId)
    cart.splice(cart.indexOf(payload), 1)

    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(removeFromCart(payload))
}

export const emptyCartThunk = (payload) => async dispatch => {
    dispatch(emptyCart(payload))
}






//reducers
let INIITAL_STATE = {
    cart: {}
}
if (localStorage.getItem('cart')) {
    let cartStorage = JSON.parse(localStorage.getItem('cart'))
    for (const item in cartStorage){
        INIITAL_STATE.cart[cartStorage[item].tempId] = {...cartStorage[item]}
        // INIITAL_STATE.cart
    }
} else {
    INIITAL_STATE.cart = {}
}

export default function cartReducer(state=INIITAL_STATE, action){
    switch (action.type) {
        case ADD_TO_CART:
            const newState = {...state}
            for (const item in action.payload) {
                if (!newState.cart[action.payload[item].tempId]){
                    newState.cart[action.payload[item].tempId] = action.payload[item]
                    } else {
                        newState.cart[action.payload[item].tempId] = {
                            ...newState.cart[action.payload[item].tempId],
                            ...action.payload[item]
                        }
                    }
                }
                return newState
        case REMOVE_FROM_CART:
                const removedState = {...state}
                delete removedState.cart[action.payload.tempId]
                return removedState
        case EMPTY_CART:
            const emptyState = {...state}
                emptyState.cart = {}
                return emptyState
        default:
            return state
            }
        }

        // ...state,
        // [action.payload.tempId]: {
        //     ...state[action.payload.tempId],
        //     ...action.payload
        // }
