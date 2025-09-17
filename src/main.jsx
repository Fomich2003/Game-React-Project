import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './contexts/AppContext.jsx'
import App from './App'
import './index.css'

const root = document.querySelector("#root")

createRoot(root).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)