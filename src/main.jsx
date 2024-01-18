import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.scss'
import "bootstrap/dist/js/bootstrap";
import { AppProvider } from './context/TasksContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)

