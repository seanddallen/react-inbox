import {createStore, combineReducers } from 'redux'
import contactsReducer from './reducer'

const rootReducer = combineReducers({
  contacts: contactsReducer
})

export default createStore(rootReducer)
