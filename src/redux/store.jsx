
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import testReducer from './test'

const store = configureStore({
  reducer: {
    user: userReducer,
    test: testReducer,
  },
});

export default store;