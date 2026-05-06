import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. Importa a função de injeção da Vercel
import { inject } from '@vercel/analytics';

// 2. Inicializa o Analytics
inject();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)