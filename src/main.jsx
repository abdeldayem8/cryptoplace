import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  HashRouter } from 'react-router-dom'
import CoincontextProvider from './context/CoinContext/Coincontext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <CoincontextProvider>
    <App />
    </CoincontextProvider>
    </HashRouter>
  </React.StrictMode>,
)

