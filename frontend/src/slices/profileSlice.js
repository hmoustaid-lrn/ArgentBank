import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  firstName: '',
  lastName: '',
  error: '',
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true
    },
    firstName: (state, action) => {
      state.loading = false
      state.firstName = action.payload
      state.error = ''
    },
    lastName: (state, action) => {
      state.loading = false
      state.lastName = action.payload
      state.error = ''
    },
    error: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    logOut: (state) => {
      state.loading = false
      state.firstName = ''
      state.lastName = ''
      state.error = ''
    },
  },
})
const { actions, reducer } = profileSlice
export const {
  loading,
  firstName,
  lastName,
  error,
  logOut,
} = actions

export default reducer
