import { combineReducers, configureStore } from '@reduxjs/toolkit'
import user from './user'

const reducers = combineReducers({
	user: user,
})

export const store = configureStore({
  reducer: reducers
});

export default store;