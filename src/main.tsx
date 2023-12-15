import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore(
  { reducer: rootReducer }
)

document.title = 'Tua CRM'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
)
