import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </StrictMode>,
)
