// user submit new workout
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const getAPISuccess = data => ({
  type: GET_API_SUCCESS,
  data
});

export const getResultsFromAPI = () => (dispatch) => {

  return fetch('http://www.dnd5eapi.co/api/spells/1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then((data) => dispatch(getAPISuccess(data)))
    .catch((err) => {
    //   dispatch(getExercisesError(err))
    });
}