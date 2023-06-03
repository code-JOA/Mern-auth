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
import Homescreen from './screens/Homescreen.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path= '/' element={ <App /> } >
      <Route path='/' element={ <Homescreen /> } >

      </Route>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
