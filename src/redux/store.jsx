
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import testReducer from './test'
import chatResultReducer from './chatResult'
import counselingReducer from './counseling'
import solutionReducer from './solution'

const store = configureStore({
  reducer: {
    user: userReducer,
    test: testReducer,
    chatResult: chatResultReducer,
    counseling: counselingReducer,
    solution: solutionReducer,
  },
});

export default store;