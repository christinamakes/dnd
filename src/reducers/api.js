import {GET_API_SUCCESS, GET_INFO_URL, REQUEST_INFO_URL} from '../actions/apiActions'

const initialState = {
  results: null,
  URLresults: null,
  loading: false,
  error: false
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_SUCCESS:
      return {
        ...state,
        results: action.data
      }
      case GET_INFO_URL:
      return {
        ...state,
        URLresults: action.data
      }
      case REQUEST_INFO_URL:
      return {
        ...state,
        loading: true,
        error: false
      }
    default: return state;
  }
}

export default apiReducer;
