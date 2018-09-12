// get initial api info
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const getAPISuccess = data => ({
  type: GET_API_SUCCESS,
  data
});

export const getResultsFromAPI = () => (dispatch) => {

  return fetch('http://www.dnd5eapi.co/api/spells', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then((data) => dispatch(getAPISuccess(data.results)))
    .catch((err) => {
    //   dispatch(getExercisesError(err))
    });
}


// Query API for information based on URL
export const GET_INFO_URL = 'GET_INFO_URL';
export const getInfoURL = data => ({
    type: GET_INFO_URL,
    data
});

export const REQUEST_INFO_URL = 'REQUEST_INFO_URL';
export const requestInfoURL = url => ({
    type: REQUEST_INFO_URL,
    url
});

export const getResultsFromURL = (url) => (dispatch) => {

    return fetch(`${url}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => dispatch(getInfoURL(data)))
      .catch((err) => {
      //   dispatch(getExercisesError(err))
      });
  }