import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.css'
import './styles/typography.css'
import './styles/theme.css'
import './styles/index.css'
import { App } from './features/game/ui/app'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
