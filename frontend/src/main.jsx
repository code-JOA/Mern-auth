import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap from 'bootstrap';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(),
  

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
