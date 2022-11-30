// action constants

const LOAD_MENU = 'menu/LOAD_MENU'




// action
const loadMenu = (menu) => ({
    type: LOAD_MENU,
    menu
})



// thunks
export const getMenuThunk = () => async (dispatch) => {
    const response = await fetch(`/api/pies/menu`)

    if(response.ok){
        const data = await response.json()
        await dispatch(loadMenu(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}




// reducer
const initialState = {menu:{}}
export default function menuReducer(state = initialState, action){
    switch (action.type) {
        case LOAD_MENU:
            const menu = normalizeArray(action.menu.pies)
            return {...state, menu:{...menu}}

        default:
            return state;
    }
}











function normalizeArray(dataArray){
    if (!dataArray instanceof Array) throw new Error('Normalize problem: data invalid')
    const obj = {}
    dataArray.forEach(element => {
      obj[element.id] = element
    })
    return obj
  }
