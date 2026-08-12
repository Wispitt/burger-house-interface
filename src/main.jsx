import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { router } from './routes.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </StrictMode>,
)
