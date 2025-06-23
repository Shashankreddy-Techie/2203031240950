import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8cd99e', // Green accent
    },
    background: {
      default: '#1e1e2f',
      paper: '#2a2a40',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
