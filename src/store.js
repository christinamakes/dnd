import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import apiReducer from './reducers/api';


const store = createStore(
  combineReducers({
    api: apiReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store;