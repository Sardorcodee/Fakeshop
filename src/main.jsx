import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
