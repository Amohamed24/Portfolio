import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Projects from './pages/Projects'
import Home from './pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <Projects />
  </StrictMode>,
)
