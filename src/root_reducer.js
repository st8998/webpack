import { combineReducers } from 'redux'

import counterReducer from './counter/counter_reducer'

export default combineReducers({
  counter: counterReducer
})
