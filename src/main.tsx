import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
// import 'https://cdn.jsdelivr.net/gh/SebastianAigner/twemoji-amazing/twemoji-amazing.css'
import './assets/css/recolored-twemoji.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
