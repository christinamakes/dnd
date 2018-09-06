// user submit new workout
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const getAPISuccess = data => ({
  type: GET_API_SUCCESS,
  data
});

export const getResultsFromAPI = () => (dispatch) => {

  return fetch('http://www.dnd5eapi.co/api/spells', {
    method: 'GET',
  })
    .then(res => res.json())
    .then((data) => dispatch(getAPISuccess(data.results)))
    .catch((err) => {
    //   dispatch(getExercisesError(err))
    });
}