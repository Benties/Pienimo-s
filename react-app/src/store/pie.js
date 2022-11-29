// constants
const ADD_PIE = 'pie/ADD_PIE'



//action creator
const addPie = (pie) => ({
  type: ADD_PIE,
  pie
})




//thunk
export const createPieThunk = (payload) => async (dispatch) => {
  console.log('payloadddddddddddddddddd',payload)
  const response = await fetch('/api/pies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addPie(data))
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      console.log('hi')
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}




const initialState = {}
//reducer
export default function pieReducer(state = initialState, action){
  switch (action.type) {
    case ADD_PIE:
      if(!state[action.pie.id]){
        const newState = {
          ...state,
          [action.pie.id]: action.pie
        }
        return newState
      }
      return {
        ...state,
        [action.pie.id]: {
          ...state[action.pie.id],
          ...action.pie}
      }
    default:
      return state
  }
}


//HELPERS
function normalizeArray(dataArray){
    if (!dataArray instanceof Array) throw new Error('Normalize problem: data invalid')
    const obj = {}
    dataArray.forEach(element => {
      obj[element.id] = element
    })
    return obj
  }
