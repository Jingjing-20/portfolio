import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
import './animate.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute={["class", "data-theme"]} defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
