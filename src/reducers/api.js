import {GET_API_SUCCESS} from '../actions/apiActions'

const initialState = {
  results: []
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_SUCCESS:
      return {
        ...state,
        results: [...action.data]
      }
    default: return state;
  }
}

export default apiReducer;
