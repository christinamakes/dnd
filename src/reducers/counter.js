export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'

const initialState = {
  results: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        // isIncrementing: true
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })
  }
}
