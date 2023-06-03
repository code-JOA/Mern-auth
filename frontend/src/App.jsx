// import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
// import Homescreen from './screens/Homescreen';


const App = () => {
  return (
    <>
    < Header />
    < Container className='my-2'></Container>
    < Outlet />
    </>
  );
}

export default App