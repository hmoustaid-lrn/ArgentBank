import React from 'react'
import { createRoot } from 'react-dom/client'

import Router from './Router'
import { Provider } from "react-redux";
import store from "./store"

import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store'


import './index.css';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
)