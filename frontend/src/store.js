import {combineReducers } from 'redux'

import { configureStore } from '@reduxjs/toolkit'
import loginSliceReducer from '../src/slices/loginSlice'
import profileSliceReducer from '../src/slices/profileSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    login: loginSliceReducer,
    profile: profileSliceReducer,
  }) 

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})


export const persistor = persistStore(store)

export default store