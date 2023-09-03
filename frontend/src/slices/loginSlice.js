import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    authenticated: false,
    error: '',
  }


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      pending: (state) => {
        state.loading = true
      },
      authenticated: (state) => {
        state.loading = false
        state.authenticated = true
        state.error = ''
      },
      error: (state, action) => {
        state.loading = false
        state.error = action.payload
      },
      out: (state) => {
        state.authenticated = false
      },
    },
  })

const { actions, reducer } = loginSlice

  export const {
    pending,
    authenticated,
    error,
    out
  } = actions

  export default reducer


