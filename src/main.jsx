import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Login } from './pages/Login/index.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
  </StrictMode>,
)
