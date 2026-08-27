import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import { router } from './routes.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/burger-house-interface/'>
      <RouterProvider router={router} />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>,
)
