import { configureStore } from '@reduxjs/toolkit'
import loginSliceReducer from '../src/slices/loginSlice'
import profileSliceReducer from '../src/slices/profileSlice'

const store = configureStore({
  reducer: {
    login: loginSliceReducer,
    profile: profileSliceReducer
  },
})




export default store