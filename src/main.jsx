import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Fashion from './pages/Fashion.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Fashion/>}></Route>
    </Routes>
  </Router>
  </React.StrictMode>,
)
