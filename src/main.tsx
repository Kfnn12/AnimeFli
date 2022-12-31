import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Global} from "@emotion/react"
import GlobalStyles from './styles/global'
import './index.css'
import "twin.macro"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={GlobalStyles}/>
    <App />
  </React.StrictMode>,
)
