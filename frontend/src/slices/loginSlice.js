import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    success: false,
    error: '',
  }


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      pending: (state) => {
        state.loading = true
      },
      success: (state) => {
        state.loading = false
        state.success = true
        state.error = ''
      },
      error: (state, action) => {
        state.loading = false
        state.error = action.payload
      }
    },
  })

const { actions, reducer } = loginSlice

  export const {
    pending,
    success,
    error,
  } = actions

  export default reducer


