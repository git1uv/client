
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import testReducer from './test'
import chatResultReducer from './chatResult'

const store = configureStore({
  reducer: {
    user: userReducer,
    test: testReducer,
    chatResult: chatResultReducer,
  },
});

export default store;