import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './index.css'
import App from './App.jsx'

// Initialize EmailJS with your public key
emailjs.init('KD8PYSkFbR4TgHijc')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
