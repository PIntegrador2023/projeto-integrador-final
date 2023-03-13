import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UvIndexProvider } from './components/UxIndex/UvContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UvIndexProvider>
    <App />
    </UvIndexProvider>
  </React.StrictMode>,
)
