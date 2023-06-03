// import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
// import Homescreen from './screens/Homescreen';


const App = () => {
  return (
    <>
    < Header />
    < Outlet />
    </>
  );
}

export default App