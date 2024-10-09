import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/main.routes'
import './index.css'
import './global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
