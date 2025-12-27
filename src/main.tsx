import { StrictMode } from 'react'
import { SnackbarProvider } from 'notistack'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <App />
    </SnackbarProvider>
  </StrictMode>,
)
