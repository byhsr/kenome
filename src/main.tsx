import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.tsx'
import { Provider } from 'jotai'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={Router}/>
    </Provider>
  </StrictMode>,
)
