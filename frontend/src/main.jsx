import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // This might be './App.js' for you
import './index.css'       // <-- ADD THIS LINE

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)