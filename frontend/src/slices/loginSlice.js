import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logged: false,
    token: null,
    error: null,
  }


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      success: (state, action) => {
        state.logged = true
        state.token = action.payload.body.token
        state.error = null
      },
      fail: (state, action) => {
        state.logged = false
        state.token = null
        state.error = action.payload
      },
      clearError: (state) =>{
        state.error = null
      },
      out: (state) => {
        state.logged = false
        state.token = null
        state.error = null
      },
    },
  })

const { actions, reducer } = loginSlice

  export const {
    success,
    fail,
    clearError,
    out
  } = actions

  export default reducer


