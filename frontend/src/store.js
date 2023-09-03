import { configureStore } from '@reduxjs/toolkit'
import loginSliceReducer from '../src/slices/loginSlice'

const store = configureStore({
  reducer: {
    login: loginSliceReducer,
  },
})




export default store